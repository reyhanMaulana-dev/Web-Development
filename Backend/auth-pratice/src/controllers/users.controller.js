import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
const prisma = new PrismaClient()

class UserController{
    register = async (req, res, next) => {
        try {
            const { email, password, role_id } = req.body
            
            const hasdedPassword = await bcrypt.hash(password, 10)

            const newUser = await prisma.user.create({
                data: {email, password: hasdedPassword, role_id: Number(role_id)}
            })

            res.status(201).send(newUser)
        } catch (error) {
            next(error)
        }
    }

    login = async (req, res, next) => {
        try {
            const { email, password } = req.body
            const user = await prisma.user.findUniqueOrThrow({ where: { email }})

            const isValid = await bcrypt.compare(password, user.password)
            if(!isValid) throw { name: 'PasswordInvalid', message: "Login Credentials is invalid"}
            
            const payload = { id: user.id }
            const acces_token = jsonwebtoken.sign(payload, process.env.JWT_SECRET)

            res.status(200).send({ acces_token: acces_token })
        } catch (error) {
            next(error)
        }
    }

    getUsers = async (req, res, next) => {
        try {
            const users = await prisma.user.findMany({
                include: { role: true }
            })
            
            if(users.length == 0) throw { name: 'NotFoundError', message: 'Users Not Found' }

            res.status(200).send(users)
        } catch (error) {
            next(error)
        }
    }

    findUser = async (req, res, next) => {
        try {
            const { id } = req.params
            const foundUser = await prisma.user.findUniqueOrThrow({ where: {id: Number(id) }})

            res.status(201).send(foundUser)
        } catch (error) {
            next(error)
        }
    }

    updateUser = async (req, res, next) => {
        try {
            const { id } = req.params
            const { email, role_id } = req.body
            
            const updateUser = await prisma.user.update({
                where: { id: Number(id) },
                data: { email }
            })

            res.status(200).send(updateUser)
        } catch (error) {
            next(error)
        }
    }

    deleteUser = async (req, res, next) => {
        try {
            const { id } = req.params
            const deleteUser = await prisma.user.delete({ where: {id: Number(id) }})

            res.status(200).send(deleteUser)
        } catch (error) {
            next(error)
        }
    }
}

export const userController = new UserController()