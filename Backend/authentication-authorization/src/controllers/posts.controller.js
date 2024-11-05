import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class PostController {
  addPost = async (req, res, next) => {
    try {
      const { title, content, user_id } = req.body;
      // if (!title || !content || !user_id) throw new Error("Bad Request");

      const newPost = await prisma.post.create({
        data: { title, content, user_id: Number(user_id) },
      });

      res.status(201).send(newPost);
    } catch (error) {
      next(error)
    }
  };

  getPost = async (req, res, next) => {
    try {
      const posts = await prisma.post.findMany();
      res.status(200).send(posts);
    } catch (error) {
      next(error)
    }
  };

  findPost = async (req, res, next) => {
    try {
      const { id } = req.params;
      const post = await prisma.post.findUniqueOrThrow({
        where: { id: Number(id) },
        include: {
          author: true,
          comments: { orderBy: { created_at: "desc" } },
        },
      });

      res.status(200).send(post);
    } catch (error) {
      next(error)
    }
  };

  updatePost = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { title, content } = req.body;

      const updatedPost = await prisma.post.update({
        where: { id: Number(id) },
        data: { title, content },
      });

      res.status(200).send(updatedPost);
    } catch (error) {
      next(error)
    }
  };

  deletePost = async (req, res, next) => {
    try {
      const { id } = req.params;
      await prisma.post.findUniqueOrThrow({
        where: { id: Number(id) },
      });

      const deletedPost = await prisma.post.delete({
        where: { id: Number(id) },
      });

      res.status(200).send(deletedPost);
    } catch (error) {
      next(error)
    }
  };
}

export const postController = new PostController();
