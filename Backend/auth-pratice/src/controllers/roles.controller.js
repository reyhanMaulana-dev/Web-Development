import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

class RoleController{
    addRole = async (req, res, next) => {
        try {
            const { name } = req.body
            if(!name) throw { name: 'Bad Request', message: 'Bad Request' }
            
            const newRole = await prisma.role.create({ data: { name }})
            res.status(201).send(newRole)
        } catch (error) {
            next(error)
        }
    }

    getRoles = async (req, res, next) => {
        try {
            const roles = await prisma.role.findMany()
            if(roles.length == 0) throw { name: 'NotFoundError', message: 'Roles Not Found'}
                        
            res.status(200).send(roles)
        } catch (error) {
            next(error)
        }
    }

    findRole = async (req, res, next) => {
        try {
            const { id } = req.params
            const foundRole = await prisma.role.findUniqueOrThrow({ where: { id: Number(id)}})
            
            res.status(200).send(foundRole)
        } catch (error) {
            next(error)
        }
    }

    updateRole = async (req, res, next) => {
        try {
            const { name } = req.body
            const { id } = req.params
            const updateRole = await prisma.role.update({ 
                where: { id: Number(id) },
                data: { name }
            })

            res.status(200).send(updateRole)
        } catch (error) {
            next(error)
        }
    }

    deleteRole = async (req, res, next) => {
        try {
            const { id } = req.params
            const deleteRole = await prisma.role.delete({ where: {id: Number(id)}})
            
            res.status(200).send(deleteRole)
        } catch (error) {
            next(error)
        }
    }
}

export const roleController = new RoleController()