import { Router } from "express";
import * as NodeController from "../controllers/node.controller";
const router = new Router();

// Get Node by ID
router.route("/node/:nodeID").get(NodeController.getNodeByID);

// Get all root Nodes for a given universe
router
  .route("/nodes/universe/:id/root")
  .get(NodeController.getUniverseRootNodes);

// Get all Nodes for Forms (returns ID and Title)
router
  .route("/nodes/form/public/all")
  .get(NodeController.getAllPublicNodesForSelect);

// Get all Nodes for Forms (returns ID and Title)
router
  .route("/nodes/form/private/:id/all")
  .get(NodeController.getAllPrivateNodesForSelect);

// Delete Node
router.route("/node/:id/delete").get(NodeController.deleteNode);

// Upload Image to Node (JPEG, GIF, PNG)
router.route("/node/:id/upload/file").post(NodeController.uploadImageToNode);

// Retrieve Node files
router.route("/node/:id/retrieve/files").get(NodeController.retrieveNodeFiles);

// Get Node sources
router.route("/node/:id/sources").get(NodeController.getNodeSources);

// Get Node sources
router.route("/node/:id/subtopics").get(NodeController.getNodeSubtopics);

// Create a node
router.route("/node").post(NodeController.createNode);

// Edit a node
router.route("/node/:id/edit").post(NodeController.editNode);

// FOR DEVELOPMENT - Used to make edits to the database

// Remove Duplicate Sources and Subtopics from all Nodes
router
  .route("/node/remove/duplicates/all")
  .get(NodeController.removeDuplicateSourcesAndSubtopics);

// Replace legacy node connections with connection objects
router
  .route("/node/connections/update/all")
  .get(NodeController.updateNodeConnections);

// LEGACY ** Remove Duplicate Sources and Subtopics from all Nodes
router
  .route("/node/remove/duplicates/all/legacy")
  .get(NodeController.legacyRemoveDuplicateSourcesAndSubtopics);

export default router;
