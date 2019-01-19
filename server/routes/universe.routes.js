import { Router } from "express";
import * as UniverseController from "../controllers/universe.controller";
const router = new Router();

// Create Universe
router.route("/universe").post(UniverseController.createUniverse);

// Get Universe by ID
router.route("/universe/:id").get(UniverseController.getUniverse);

// Get Public Universe
router.route("/universe/public/get").get(UniverseController.getPublicUniverse);

// Create a personal universe for a given user if it doesn't already exist
router
  .route("/universe/create/personal/:id")
  .get(UniverseController.createPersonalUniverse);

// Get all Universes that a User is apart of, other than the individuals private universe
router
  .route("/universe/user/:id/fetch/all")
  .get(UniverseController.getUsersUniverses);

// Create a single public Universe and add all nodes to it (should not be used again)
router
  .route("/universe/create/public")
  .get(UniverseController.createPublicUniverse);

export default router;
