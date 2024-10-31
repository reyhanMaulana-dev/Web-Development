import express from "express"
import { commentController } from "../controllers/comments.controller.js"


const router = express()

router.post("/", commentController.addComment)

export default router