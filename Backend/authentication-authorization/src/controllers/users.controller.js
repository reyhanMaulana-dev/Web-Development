import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'
import jsonwebtoken from "jsonwebtoken";

const prisma = new PrismaClient();

class UserController {
  register = async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      if (!username || !email || !password) throw new Error("Bad Request");

      const hashedPassword = await bcrypt.hash(password, 10)
      
      const newUser = await prisma.user.create({
        data: { username, email, password: hashedPassword },
      });

      res.status(201).send(newUser);
    } catch (error) {
      next(error)
    }
  };

  login = async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      
      let user;
      if(username){
        user = await prisma.user.findUnique({ where: { username }})
      };

      if(!user && email){
        user = await prisma.user.findUnique({ where: { email }})
      };

      const isValid = await bcrypt.compare(password, user.password)
      if(!isValid) throw new Error("Login Credentials is invalid");

      const payload = { id: user.id }
      const acces_token = jsonwebtoken.sign(payload, process.env.JWT_SECRET)
      
      res.send({ acces_token: acces_token })
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
