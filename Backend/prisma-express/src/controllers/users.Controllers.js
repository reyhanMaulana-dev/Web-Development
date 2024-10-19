import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class UserController {
  addUser = async (req, res) => {
    try {
      const { email, password, username } = req.body;

      const newUser = await prisma.user.create({
        data: {
          email,
          password,
          username,
        },
      });

      res.status(201).send(newUser);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  };

  getUser = async (req, res) => {
    try {
      const users = await prisma.user.findMany();
      res.status(201).send(users);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  };

  findUser = async (req, res) => {
    try {
      const { id } = req.params;
      const Founduser = await prisma.user.findUnique({
        where: { id: +id },
      });

      if (!Founduser) throw new Error("User not found");
      res.status(201).send(Founduser);
      return Founduser;
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  };

  updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { email, password, username } = req.body;

      const user = await prisma.user.findUnique({
        where: { id: +id },
      });

      if (!user) throw new Error("User not found");

      const updateUser = await prisma.user.update({
        where: { id: +id },
        data: {
          email,
          password,
          username,
        },
      });

      res.status(201).send(updateUser);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  };

  removeUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await prisma.user.findUnique({
        where: { id: +id },
      });

      if (!user) throw new Error("User not found");

      const removeUser = await prisma.user.delete({
        where: { id: +id },
      });

      res.status(201).send(removeUser);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  };
}

export const userController = new UserController();
