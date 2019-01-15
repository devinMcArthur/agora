import Node from "../models/node";
import { ObjectId } from "mongodb";

import validateNodeInput from "../validators/validateNodeInput";

import { addSource } from "../util/addSource";
import { addSubtopic } from "../util/addSubtopic";
import { notDeepEqual } from "assert";

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
        { $addToSet: { subtopics: node._id } },
        { new: true }
      );
    });

    node.subtopics.forEach(async subtopic => {
      await Node.findByIdAndUpdate(
        subtopic,
        { $addToSet: { sources: node._id } },
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
    let sourceArray = [],
      src;

    if (node.sources && node.sources.length > 0) {
      let sources = node.sources.slice();
      for (var i in sources) {
        src = await Node.findById(sources[i]);
        sourceArray.push(src);
      }
    }

    res.json(sourceArray);
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
    let subtopicArray = [],
      src;

    if (node.subtopics && node.subtopics.length > 0) {
      let subtopics = node.subtopics.slice();
      for (var i in subtopics) {
        src = await Node.findById(subtopics[i]);
        subtopicArray.push(src);
      }
    }

    res.json(subtopicArray);
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
      sources: { $eq: [] }
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
 * Remove duplicate sources and subtopics from all nodes
 * @param req
 * @param res
 * @returns void
 */
export async function removeDuplicateSourcesAndSubtopics(req, res) {
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
