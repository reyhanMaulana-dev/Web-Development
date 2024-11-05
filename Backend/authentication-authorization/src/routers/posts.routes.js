import express from "express";
import { postController } from "../controllers/posts.controller.js";
import { authentication } from "../middlewares/authentication.js";
import { userAuthorization } from "../middlewares/authorization.js";

const router = express.Router();

router.post("/", postController.addPost);
router.get("/", postController.getPost);
router.get("/:id", postController.findPost);

router.put("/:id", authentication, userAuthorization, postController.updatePost);
router.delete("/:id", authentication, userAuthorization, postController.deletePost);

export default router;
