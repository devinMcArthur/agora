import { Router } from "express";
import * as NodeController from "../controllers/node.controller";
const router = new Router();

// Get Node by ID
router.route("/node/:nodeID").get(NodeController.getNodeByID);

// Get all root Nodes
router.route("/nodes/root").get(NodeController.getRootNodes);

// Get all Nodes for Forms (returns ID and Title)
router.route("/nodes/form/all").get(NodeController.getAllNodesForSelect);

// Create a node
router.route("/node").post(NodeController.createNode);

export default router;
