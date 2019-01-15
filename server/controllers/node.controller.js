import Node from "../models/node";
import Connection from "../models/connection";
import User from "../models/user";
import { ObjectId } from "mongodb";

import validateNodeInput from "../validators/validateNodeInput";

import { addSource } from "../util/addSource";
import { addSubtopic } from "../util/addSubtopic";

// Highlight Array Legend
// 0: Nothing
// 1: Speculation
// 2: Opinion
// 3: Fact
// 4: Incorrect Statement
// 5: Question
// 6: Command
// 7: Axiom

/**
 * Create a node
 * @param req
 * @param res
 * @returns void
 */
export async function createNode(req, res) {
  try {
    const { isValid, errors } = validateNodeInput(req.body);
    if (!isValid) {
      console.log(errors);
      return res.status(400).json(errors);
    }

    let highlightArray = [],
      authorArray = [];
    if (req.body.content && req.body.content.length > 0) {
      highlightArray.length = req.body.content.length;
      highlightArray.fill(0, 0, highlightArray.length);

      authorArray.length = req.body.content.length;
      authorArray.fill(req.body.author, 0, authorArray.length);
    }

    let nodeContent = {
      string: req.body.content,
      highlightArray,
      authorArray
    };

    let node = new Node({
      title: req.body.title,
      content: nodeContent,
      subtopics: req.body.subtopics,
      sources: req.body.sources
    });

    node = await node.save();

    node.sources.forEach(async source => {
      await Node.findByIdAndUpdate(
        source,
        { $push: { subtopics: node._id } },
        { new: true }
      );
    });

    node.subtopics.forEach(async subtopic => {
      await Node.findByIdAndUpdate(
        subtopic,
        { $push: { sources: node._id } },
        { new: true }
      );
    });

    res.end();
  } catch (e) {
    console.log(e);
    let errors = {};
    errors.general = e;
    res.status(500).json(errors);
  }
}

/**
 * Edit a node
 * @param req
 * @param res
 * @returns void
 */
export async function editNode(req, res) {
  try {
    let node = await Node.findById(req.params.id);
    node.version++;

    (node.title = req.body.title), (node.content.string = req.body.content);
    addSource(node, req.body.sources);
    addSubtopic(node, req.body.subtopics);
    await node.save();

    res.end();
  } catch (e) {
    console.log(e);
    let errors = {};
    errors.general = e;
    res.status(500).json(errors);
  }
}

/**
 * Get a node by its ID
 * @param req
 * @param res
 * @returns void
 */
export async function getNodeByID(req, res) {
  try {
    let node = await Node.findById(req.params.nodeID);
    res.json(node);
  } catch (e) {
    console.log(e);
    let errors = {};
    errors.general = e;
    res.status(500).json(errors);
  }
}

/**
 * Get all sources for a Node
 * @param req
 * @param res
 * @returns void
 */
export async function getNodeSources(req, res) {
  try {
    let node = await Node.findById(req.params.id);
    let returnArray = [];

    if (node.sourceConnections && node.sourceConnections.length > 0) {
      for (var i = 0; i < node.sourceConnections.length; i++) {
        let connection = await Connection.findById(node.sourceConnections[i]);
        let sourceNode = await Node.findById(connection.sourceNode);
        returnArray.push({
          connection,
          source: sourceNode
        });
      }
    }

    res.json(returnArray);
  } catch (e) {
    console.log(e);
    let errors = {};
    errors.general = e;
    res.status(500).json(errors);
  }
}

/**
 * Get all subtopics for a Node
 * @param req
 * @param res
 * @returns void
 */
export async function getNodeSubtopics(req, res) {
  try {
    let node = await Node.findById(req.params.id);
    let returnArray = [];

    if (node.subtopicConnections && node.subtopicConnections.length > 0) {
      for (var i = 0; i < node.subtopicConnections.length; i++) {
        let connection = await Connection.findById(node.subtopicConnections[i]);
        let subtopicNode = await Node.findById(connection.subtopicNode);
        returnArray.push({
          connection,
          subtopic: subtopicNode
        });
      }
    }

    console.log(returnArray);
    res.json(returnArray);
  } catch (e) {
    console.log(e);
    let errors = {};
    errors.general = e;
    res.status(500).json(errors);
  }
}

/**
 * Get all root nodes
 * @param req
 * @param res
 * @returns void
 */
export async function getRootNodes(req, res) {
  try {
    let nodes = await Node.find({
      $or: [
        { sourceConnections: { $eq: [] } },
        { sourceConnections: { $eq: null } }
      ]
    });
    res.json(nodes);
  } catch (e) {
    console.log(e);
    let errors = {};
    errors.general = e;
    res.status(500).json(errors);
  }
}

/**
 * Get all Nodes for form
 * @param req
 * @param res
 * @returns void
 */
export async function getAllNodesForSelect(req, res) {
  try {
    let nodes = await Node.find();
    let nodeArray = [];
    nodes.forEach(node => {
      nodeArray.push({
        label: node.title,
        value: node._id
      });
    });
    res.json(nodeArray);
  } catch (e) {
    console.log(e);
    let errors = {};
    errors.general = e;
    res.status(500).json(errors);
  }
}

/**
 * Remove legacy duplicate sources and subtopics from all nodes
 * @param req
 * @param res
 * @returns void
 */
export async function removeDuplicateSourcesAndSubtopics(req, res) {
  try {
    let nodes = await Node.find();
    nodes.forEach(async node => {
      if (node.sourceConnections.length > 0) {
        for (var i = 0; i < node.sourceConnections.length; i++) {
          let connection = await Connection.findById(node.sourceConnections[i]);
          let connections = await Connection.find({
            sourceNode: connection.sourceNode,
            subtopicNode: node._id
          });
          if (connections.length > 1) {
            for (var j = 1; j < connections.length; j++) {
              if (connections[j]) {
                await Node.findByIdAndUpdate(
                  connections[j].sourceNode,
                  { $pull: { subtopicConnections: connections[j]._id } },
                  { new: true }
                );
                await Node.findByIdAndUpdate(
                  connections[j].subtopicNode,
                  { $pull: { sourceConnections: connections[j]._id } },
                  { new: true }
                );
                await Connection.findByIdAndRemove(connections[j]._id);
              }
            }
          }
        }
      }
      if (node.subtopicConnections.length > 0) {
        for (var i = 0; i < node.subtopicConnections.length; i++) {
          let connection = await Connection.findById(
            node.subtopicConnections[i]
          );
          let connections = await Connection.find({
            subtopicNode: connection.subtopicNode,
            sourceNode: node._id
          });
          if (connections.length > 1) {
            for (var j = 1; j < connections.length; j++) {
              if (connections[j]) {
                await Node.findByIdAndUpdate(
                  connections[j].sourceNode,
                  { $pull: { subtopicConnections: connections[j]._id } },
                  { new: true }
                );
                await Node.findByIdAndUpdate(
                  connections[j].subtopicNode,
                  { $pull: { sourceConnections: connections[j]._id } },
                  { new: true }
                );
                await Connection.findByIdAndRemove(connections[j]._id);
              }
            }
          }
        }
      }
    });

    console.log("Big success");
    res.end();
  } catch (e) {
    console.log(e);
    let errors = {};
    errors.general = e;
    res.status(500).json(errors);
  }
}

/**
 * LEGACY ** Remove legacy duplicate sources and subtopics from all nodes
 * @param req
 * @param res
 * @returns void
 */
export async function legacyRemoveDuplicateSourcesAndSubtopics(req, res) {
  try {
    let nodes = await Node.find();
    nodes.forEach(async node => {
      node.sources = node.sources.filter((elem, index, self) => {
        return index == self.indexOf(elem);
      });
      node.subtopics = node.subtopics.filter((elem, index, self) => {
        return index == self.indexOf(elem);
      });
      await node.save();
    });

    console.log("Big success");
    res.end();
  } catch (e) {
    console.log(e);
    let errors = {};
    errors.general = e;
    res.status(500).json(errors);
  }
}

/**
 * Replace legacy node connections with connection objects
 * @param req
 * @param res
 * @returns void
 */
export async function updateNodeConnections(req, res) {
  try {
    let nodes = await Node.find();
    let author = await User.find({ admin: true });
    author = author[0];
    nodes.forEach(async node => {
      if (node.sources.length > 0) {
        node.sources.forEach(async source => {
          let connection = new Connection({
            sourceNode: source,
            subtopicNode: node._id,
            author: author._id
          });
          // Update related node
          await Node.findByIdAndUpdate(
            source,
            {
              $pull: { subtopics: node._id },
              $push: { subtopicConnections: connection._id }
            },
            { new: true }
          );
          // Update node
          await Node.findByIdAndUpdate(
            node._id,
            {
              $pull: { sources: source },
              $push: { sourceConnections: connection._id }
            },
            { new: true }
          );
          await connection.save();
        });
      }
      if (node.subtopics.length > 0) {
        node.subtopics.forEach(async subtopic => {
          let connection = new Connection({
            sourceNode: node._id,
            subtopicNode: subtopic,
            author: author._id
          });
          // Update related node
          await Node.findByIdAndUpdate(
            subtopic,
            {
              $pull: { sources: node._id },
              $push: { sourceConnections: connection._id }
            },
            { new: true }
          );
          // Update node
          await Node.findByIdAndUpdate(
            node._id,
            {
              $pull: { subtopics: subtopic },
              $push: { subtopicConnections: connection._id }
            },
            { new: true }
          );
          await connection.save();
        });
      }
    });

    console.log("Large success");
    res.end();
  } catch (e) {
    console.log(e);
    let errors = {};
    errors.general = e;
    res.status(500).json(errors);
  }
}
