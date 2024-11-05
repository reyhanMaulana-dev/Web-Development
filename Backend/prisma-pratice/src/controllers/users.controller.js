import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserController {
  addUser = async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      // if (!username || !email || !password) throw new Error("Bad Request");

      const newUser = await prisma.user.create({
        data: { username, email, password },
      });

      res.status(201).send(newUser);
    } catch (error) {
      next(error)
    }
  };

  getUsers = async (req, res, next) => {
    try {
      const users = await prisma.user.findMany();
      res.status(200).send(users);
    } catch (error) {
      next(error)
    }
  };

  findUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await prisma.user.findUniqueOrThrow({
        where: { id: Number(id) },
      });

      res.status(200).send(user);
    } catch (error) {
      next(error)
    }
  };

  getUserPosts = async (req, res, next) => {
    try {
      const { id } = req.params;

      const user = await prisma.user.findUniqueOrThrow({
        where: { id: Number(id) },
        include: { posts: true },
      });
      
      res.status(200).send(user);
    } catch (error) {
      next(error)
    }
  };
}

export const userController = new UserController();
