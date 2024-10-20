import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

class CommentController {
    addComent = async (req,res) => {
        try {
            const { content, post_id, user_id } = req.body

            const foundUser = await prisma.user.findUniqueOrThrow({
                where: {id: +user_id}
            })

            const foundPost = await prisma.post.findUniqueOrThrow({
                where: {id: +post_id}
            })

            const newComment = await prisma.comment.create({
                data: {
                    content,
                    post_id: +post_id,
                    user_id: +user_id
                }
            })

            res.status(201).send(newComment)
        } catch (error) {
            console.log(error);
            res.status(500).send("Internal Server Error")
        }
    }

    getComments = async (req,res) => {
        try {           
            const comments = await prisma.comment.findMany()
            res.status(200).send(comments)
        } catch (error) {
            console.log(error);
            res.status(500).send("Internal Server Error")
        }
    }

    
}

export const commentController = new CommentController