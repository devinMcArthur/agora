import Node from "../models/node";
import Connection from "../models/connection";
import User from "../models/user";
import Universe from "../models/universe";

import multer from "multer";
import GridFsStorage from "multer-gridfs-storage";
import MongoClient from "mongodb";

import validateNodeInput from "../validators/validateNodeInput";
import keys from "../config/keys";

import { addSourceConnections } from "../util/addSourceConnections";
import { addSubtopicConnections } from "../util/addSubtopicConnections";

let storage = new GridFsStorage({
  url: keys.mongoURI,
  file: (req, file) => {
    return {
      bucketName: "nodeFiles",
      filename: `nodefile-${Date.now()}`
    };
  }
});
let upload = null;
storage.on("connection", db => {
  upload = multer({
    storage,
    fileFilter: function(req, file, cb) {
      if (
        file.mimetype !== "image/png" &&
        file.mimetype !== "image/jpeg" &&
        file.mimetype !== "image/gif"
      ) {
        return cb(new Error("Only PNG, GIF, and JPEG file types allowed"));
      }
      cb(null, true);
    }
  }).single("file");
});

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
      authorArray,
      author: req.body.author
    };

    if (req.body.private) {
      // Private Nodes
      let node = new Node({
        title: req.body.title,
        content: nodeContent,
        public: false,
        originUniverse: req.body.universe
      });

      node = await node.save();

      let sourceConnections = [];
      for (var i in req.body.sources) {
        let sourceNodePrivate = !(await Node.findById(req.body.sources[i])
          .public);
        let connection = new Connection({
          sourceNode: req.body.sources[i],
          sourceNodePrivate,
          subtopicNode: node._id,
          subtopicNodePrivate: true,
          author: req.body.author
        });
        connection = await connection.save();
        await Node.findByIdAndUpdate(req.body.sources[i], {
          $push: { subtopicConnections: connection._id }
        });
        sourceConnections.push(connection._id);
      }

      let subtopicConnections = [];
      for (var i in req.body.subtopics) {
        let subtopicNodePrivate = !(await Node.findById(req.body.subtopics[i])
          .public);
        let connection = new Connection({
          sourceNode: node._id,
          sourceNodePrivate: true,
          subtopicNode: req.body.subtopics[i],
          subtopicNodePrivate,
          author: req.body.author
        });
        connection = await connection.save();
        await Node.findByIdAndUpdate(req.body.subtopics[i], {
          $push: { sourceConnections: connection._id }
        });
        subtopicConnections.push(connection._id);
      }

      node.sourceConnections = sourceConnections;
      node.subtopicConnections = subtopicConnections;
      node = await node.save();

      res.json(node);
    } else {
      // Public Nodes
      let node = new Node({
        title: req.body.title,
        content: nodeContent,
        originUniverse: req.body.universe
      });

      node = await node.save();

      let sourceConnections = [];
      for (var i in req.body.sources) {
        let connection = new Connection({
          sourceNode: req.body.sources[i],
          subtopicNode: node._id,
          author: req.body.author
        });
        connection = await connection.save();
        await Node.findByIdAndUpdate(req.body.sources[i], {
          $push: { subtopicConnections: connection._id }
        });
        sourceConnections.push(connection._id);
      }

      let subtopicConnections = [];
      for (var i in req.body.subtopics) {
        let connection = new Connection({
          sourceNode: node._id,
          subtopicNode: req.body.subtopics[i],
          author: req.body.author
        });
        connection = await connection.save();
        await Node.findByIdAndUpdate(req.body.subtopics[i], {
          $push: { sourceConnections: connection._id }
        });
        subtopicConnections.push(connection._id);
      }

      node.sourceConnections = sourceConnections;
      node.subtopicConnections = subtopicConnections;
      node = await node.save();

      res.json(node);
    }
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
    node = await addSourceConnections(node, req.body);
    node = await addSubtopicConnections(node, req.body);
    node = await node.save();

    res.json(node);
  } catch (e) {
    console.log(e);
    let errors = {};
    errors.general = e;
    res.status(500).json(errors);
  }
}

/**
 * Delete a node through its ID
 * @param req
 * @param res
 * @returns void
 */
export async function deleteNode(req, res) {
  try {
    let node = await Node.findById(req.params.id);
    // Remove source connections
    if (node.sourceConnections.length > 0) {
      for (var i = 0; i < node.sourceConnections.length; i++) {
        // Remove connection
        let connection = await Connection.findById(node.sourceConnections[i]);
        // Remove connection from source node
        await Node.findByIdAndUpdate(
          connection.sourceNode,
          {
            $pull: { subtopicConnections: connection._id }
          },
          { new: true }
        );
        await Connection.findByIdAndRemove(node.sourceConnections[i]);
      }
    }

    // Remove subtopic connections
    if (node.subtopicConnections.length > 0) {
      for (var i = 0; i < node.subtopicConnections.length; i++) {
        // Remove connection
        let connection = await Connection.findById(node.subtopicConnections[i]);
        // Remove connection from subtopic node
        await Node.findByIdAndUpdate(
          connection.subtopicNode,
          {
            $pull: { sourceConnections: connection._id }
          },
          { new: true }
        );
        await Connection.findByIdAndRemove(node.subtopicConnections[i]);
      }
    }
    await Node.findByIdAndRemove(req.params.id);

    res.end();
  } catch (e) {
    console.log(e);
    let errors = {};
    errors.general = e;
    res.status(500).json(errors);
  }
}

/**
 * Upload Image to node (JPEG, GIF, PNG) validation is done above
 * @param req
 * @param res
 * @returns void
 */
export async function uploadImageToNode(req, res) {
  try {
    upload(req, res, async err => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          general: "Uploaded Error",
          message: "File could not be uploaded",
          error: err
        });
      }
      let node = await Node.findByIdAndUpdate(
        req.params.id,
        { $push: { files: req.file.filename } },
        { new: true }
      );
      res.json(node);
    });
  } catch (e) {
    console.log(e);
    let errors = {};
    errors.general = e;
    res.status(500).json(errors);
  }
}

/**
 * Get all files for a given node
 * @param req
 * @param res
 * @returns void
 */
export async function retrieveNodeFiles(req, res) {
  try {
    let node = await Node.findById(req.params.id);
    let files = node.files;
    let returnArray = [];
    if (files && files.length > 0) {
      for (var i = 0; i < files.length; i++) {
        let filename = files[i];
        let client = await MongoClient.connect(keys.mongoURI);
        let dbName = keys.mongoURI.split("/")[
          keys.mongoURI.split("/").length - 1
        ];
        const db = client.db(dbName);
        const collection = db.collection("nodeFiles.files");
        const collectionChunks = db.collection("nodeFiles.chunks");
        let docs = await collection.find({ filename }).toArray();
        if (!docs || docs.length === 0) {
          console.log("Error finding files");
          let errors = {};
          errors.general = "Error finding files";
          return res.status(500).json(errors);
        } else {
          let chunks = await collectionChunks
            .find({ files_id: docs[0]._id })
            .sort({ n: 1 })
            .toArray();
          if (!chunks || chunks.length === 0) {
            console.log("No data found");
            let errors = {};
            errors.general = "No data found";
            return res.status(500).json(errors);
          }
          let fileData = [];
          for (let j = 0; j < chunks.length; j++) {
            fileData.push(chunks[j].data.toString("base64"));
          }
          let finalFile = `data:${docs[0].contentType};base64,${fileData.join(
            ""
          )}`;
          returnArray.push(finalFile);
        }
      }
      res.json(returnArray);
    }
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

    res.json(returnArray);
  } catch (e) {
    console.log(e);
    let errors = {};
    errors.general = e;
    res.status(500).json(errors);
  }
}

/**
 * Get all root nodes of a given universe
 * @param req
 * @param res
 * @returns void
 */
export async function getUniverseRootNodes(req, res) {
  try {
    let universe = await Universe.findById(req.params.id);
    let nodes = await Node.find({
      $and: [
        {
          $or: [
            { sourceConnections: { $eq: [] } },
            { sourceConnections: { $eq: null } }
          ]
        },
        { originUniverse: universe._id }
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
 * Get all public Nodes for form
 * @param req
 * @param res
 * @returns void
 */
export async function getAllPublicNodesForSelect(req, res) {
  try {
    let nodes = await Node.find({ public: true });
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
 * Get all private Nodes for form
 * @param req
 * @param res
 * @returns void
 */
export async function getAllPrivateNodesForSelect(req, res) {
  try {
    let nodes = await Node.find({ originUniverse: req.params.id });
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
