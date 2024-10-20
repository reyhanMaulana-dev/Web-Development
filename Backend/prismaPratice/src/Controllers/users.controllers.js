import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

class UserController {
    addUser = async (req,res) => {
        try {
            const { username, email, password } = req.body
            
            const newUser = await prisma.user.create({
                data: {
                    username,
                    email,
                    password
                }
            })
            
            res.status(201).send(newUser)
        } catch (error) {
            console.log(error);
            res.status(500).send("Internal Server Error")
        }
    }

    getUsers = async (req,res) => {
        try {
            const users = await prisma.user.findMany()
            res.status(200).send(users)
        } catch (error) {
            console.log(error);
            res.status(500).send("Internal Server Error")
        }
    }

    findUser = async (req,res) => {
        try {
            const { id } = req.params
            const foundUser = await prisma.user.findUniqueOrThrow({
                where: {id: +id}
            })
            
            res.status(200).send(foundUser)
        } catch (error) {
            console.log(error);
            res.status(500).send("Internal Server Error")
        }
    }
    
    findUserPosts = async (req,res) => {
        try {
            const { id } = req.params
            const userPosts = await prisma.user.findUnique({
                where: {id: +id},
                include: {post: true}
            })

            res.status(200).send(userPosts)
        } catch (error) {
            console.log(error);
            res.status(500).send("Internal Server Error")
        }
    }
}

export const userController = new UserController()