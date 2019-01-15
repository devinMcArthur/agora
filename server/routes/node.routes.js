import { Router } from "express";
import * as NodeController from "../controllers/node.controller";
const router = new Router();

// Get Node by ID
router.route("/node/:nodeID").get(NodeController.getNodeByID);

// Get all root Nodes
router.route("/nodes/root").get(NodeController.getRootNodes);

// Get all Nodes for Forms (returns ID and Title)
router.route("/nodes/form/all").get(NodeController.getAllNodesForSelect);

// Get Node sources
router.route("/node/:id/sources").get(NodeController.getNodeSources);

// Get Node sources
router.route("/node/:id/subtopics").get(NodeController.getNodeSubtopics);

// Create a node
router.route("/node").post(NodeController.createNode);

// Edit a node
router.route("/node/:id/edit").post(NodeController.editNode);

// LEGACY ** Remove Duplicate Sources and Subtopics from all Nodes
router
  .route("/node/remove/duplicates/all/legacy")
  .get(NodeController.legacyRemoveDuplicateSourcesAndSubtopics);

// Remove Duplicate Sources and Subtopics from all Nodes
router
  .route("/node/remove/duplicates/all")
  .get(NodeController.removeDuplicateSourcesAndSubtopics);

// Replace legacy node connections with connection objects
router
  .route("/node/connections/update/all")
  .get(NodeController.updateNodeConnections);

export default router;
