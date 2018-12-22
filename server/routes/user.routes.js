import { Router } from "express";
import * as UserController from "../controllers/user.controller";
const router = new Router();

// Get all Users
router.route("/users").get(UserController.getUsers);

// Get one post by cuid
// router.route("/posts/:cuid").get(PostController.getPost);

// Add a new Post
router.route("/users").post(UserController.addUser);

// Delete a post by cuid
// router.route("/posts/:cuid").delete(PostController.deletePost);

// Log in a user
router.route("/user/login").post(UserController.loginUser);

export default router;
