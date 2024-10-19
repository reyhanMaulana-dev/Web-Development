import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient

class CropsController{
    addCrop = async (req,res) => {
        try {
            const { name, price, userId } = req.body

            const foundUser = await prisma.user.findUnique({
                where: {id: +userId}
            })

            if (!foundUser) throw new Error('User not found')
            const newCrop = await prisma.crop.create({
                data:{
                    name,
                    price,
                    userId: +userId
                }
            })
            res.status(201).send(newCrop)
        } catch (error) {
            console.log(error);
            res.status(500).send("Internal Server Error")
        }
    }

    removeCrop = async (req,res) => {
        try {
            const { userId } = req.params
            const foundUser = await prisma.crop.findUnique({
                where: {id: +userId}
            })

            if (!foundUser) throw new Error('Crop not found')
            const removeCrop = await prisma.crop.delete({
                where: {id: +userId}
            })
             res.status(201).send(removeCrop)
        } catch (error) {
            console.log(error);
            res.status(500).send("Internal Server Error")
        }
    }
}

export const cropsController = new CropsController()