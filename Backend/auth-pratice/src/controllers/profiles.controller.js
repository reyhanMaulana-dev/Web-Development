import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

class ProfileController{
    addProfile = async (req, res, next) => {
        try {
            const { first_name, last_name, bio } = req.body
            const { id: user_id } = req.user
                        
            const newProfile = await prisma.profile.create({
                data: { first_name, last_name, user_id: Number(user_id), bio }
            })

            res.status(201).send(newProfile)
        } catch (error) {
            next(error)
        }
    }

    getProfile = async (req, res, next) => {
        try {
            const profiles = await prisma.profile.findMany()
            
            res.status(200).send(profiles)
        } catch (error) {
            next(error)
        }
    }

    findProfile = async (req, res, next) => {
        try {
            const { id } = req.params
            const foundProfile = await prisma.profile.findUniqueOrThrow({ where: { id: Number(id) }})
            
            res.status(200).send(foundProfile) 
        } catch (error) {
            next(error)
        }
    }

    updateProfile = async (req, res, next) => {
        try {
            const { first_name, last_name, bio } = req.body
            const { id } = req.params

            const updateProfile = await prisma.profile.update({
                where: { id: Number(id) },
                data : { first_name, last_name, bio }
            })

            res.status(200).send(updateProfile)
        } catch (error) {
            next(error)
        }
    }

    deleteProfile = async (req, res, next) => {
        try {
            const { id } = req.params
            const deleteProfile = await prisma.profile.delete({
                where: { id: Number(id) }
            })

            res.status(200).send(deleteProfile)
        } catch (error) {
            next(error)
        }
    }
}

export const profileController = new ProfileController()