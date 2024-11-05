import express from "express"
import { userController } from "../controllers/users.controller.js"

const router = express.Router()

router.post("/", userController.register)
router.get("/", userController.getUsers)
router.get("/login", userController.login)

router.get("/:id", userController.findUser)
router.get("/:id/posts", userController.getUserPosts)


export default router
