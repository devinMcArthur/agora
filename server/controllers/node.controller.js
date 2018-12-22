import Node from "../models/node";
import { ObjectId } from "mongodb";

import validateNodeInput from "../validators/validateNodeInput";

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
    console.log(req.body);
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

    if (node.sources && node.sources.length > 0) {
      node.sources.forEach(async source => {
        // ADD THIS NODE AS SUBTOPIC TO SOURCE NODES
        await Node.findByIdAndUpdate(
          source,
          { $push: { subtopics: ObjectId(node._id) } },
          { new: true }
        );
      });
    }

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
 * Get all root nodes
 * @param req
 * @param res
 * @returns void
 */
export async function getRootNodes(req, res) {
  try {
    let nodes = await Node.find({ sources: { $eq: [] } });
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
