import express from "express"
import userRouter from "./users.routes.js"
import postRouter from "./posts.routes.js"
import commentRouter from "./comments.routes.js"

const router = express.Router()
router.use("/users", userRouter)
router.use("/posts", postRouter)
router.use("/comments", commentRouter)

export default router