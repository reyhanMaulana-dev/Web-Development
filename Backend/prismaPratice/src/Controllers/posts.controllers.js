import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

class PostController {
    addPost = async (req,res) => {
        try {
            const { title, content, author_id } = req.body
            
            const userFound = await prisma.user.findUniqueOrThrow({
                where: {id: +author_id}
            })
            
            const newPost = await prisma.post.create({
                data: {
                    title,
                    content,
                    author_id: +author_id
                }
            })
            res.status(200).send(newPost)
        } catch (error) {
            console.log(error);
            res.status(500).send("Internal Server Error")
        }
    }

    getPost = async (req,res) => {
        try {
            const posts = await prisma.post.findMany()
            res.status(200).send(posts)
        } catch (error) {
            console.log(error);
            res.status(500).send("Internal Server Error")
        }
    }

    findPost = async (req,res) => {
        try {
            const { id } = req.params
            const foundPost = await prisma.post.findUniqueOrThrow({
                where: {id: +id},
                include: {
                    author: true,
                    comments: true
                }
            })

            res.status(200).send(foundPost)
        } catch (error) {
            console.log(error);
            res.status(500).send("Internal Server Error")
        }
    }

    updatePost = async (req,res) => {
        try {
            const { id } = req.params
            const { title, content } = req.body
                       
            const foundPost = await prisma.post.findUniqueOrThrow({ where: {id: +id }})
            const updatePost = await prisma.post.update({
                where: {id: +id},
                data: {
                    title,
                    content,
                    updated_at: new Date()
                }
            })
            res.status(201).send(updatePost)
        } catch (error) {
            console.log(error);
            res.send(500).send("Internal Server Error")
        }
    }

    deletePost = async (req,res) => {
        try {
            const { id } = req.params
            const deletePost = await prisma.post.delete({ where:{id: +id }})
            res.send(200).send(deletePost)
        } catch (error) {
            console.log(error);
            res.send(500).send("Internal Server Error")
        }
    }
}

export const postController = new PostController()