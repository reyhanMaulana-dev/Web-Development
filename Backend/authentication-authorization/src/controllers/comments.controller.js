import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class CommentController {
  addComment = async (req, res, next) => {
    try {
      const { content, user_id, post_id } = req.body;

      // if (!content || !user_id || !post_id) throw new Error("Bad Request");

      const newComment = await prisma.comment.create({
        data: { content, user_id: Number(user_id), post_id: Number(post_id) },
      });

      res.status(201).send(newComment);
    } catch (error) {
      next(error)
    }
  };
}

export const commentController = new CommentController();
