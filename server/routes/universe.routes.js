import { Router } from "express";
import * as UniverseController from "../controllers/universe.controller";
const router = new Router();

// Get Universe by ID
router.route("/universe/:id").get(UniverseController.getUniverse);

// Get Public Universe
router.route("/universe/public/get").get(UniverseController.getPublicUniverse);

// Create a personal universe for a given user if it doesn't already exist
router
  .route("/universe/create/personal/:id")
  .get(UniverseController.createPersonalUniverse);

// Create a single public Universe and add all nodes to it (should not be used again)
router
  .route("/universe/create/public")
  .get(UniverseController.createPublicUniverse);

export default router;
