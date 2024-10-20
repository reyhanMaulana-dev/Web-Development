import express from "express";
import { userController } from "../Controllers/users.Controllers.js";
import { postController } from "../Controllers/posts.controllers.js";
import { commentController } from "../Controllers/comments.controller.js";

const router = express.Router()

// Users
router.post("/users", userController.addUser)
router.get("/users", userController.getUsers)
router.get("/users/:id", userController.findUser)
router.get("/users/:id/posts", userController.findUserPosts)

// Post
router.post("/posts", postController.addPost)
router.get("/posts", postController.getPost)
router.get("/posts/:id", postController.findPost)
router.put("/posts/:id", postController.updatePost)
router.delete("/posts/:id", postController.deletePost)

// Comments
router.post("/comments", commentController.addComent)
router.get("/comments", commentController.getComments)
export default router