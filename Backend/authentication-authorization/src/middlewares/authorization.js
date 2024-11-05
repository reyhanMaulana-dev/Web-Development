import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const userAuthorization = async (req, res, next) => {
  try {
    const { id: resources_id } = req.params;
    const { id: user_id } = req.user;
    const resourcesType = req.baseUrl.split("/").at(-1);

    let hasAccess = false;

    switch (resourcesType) {
      case "posts":
        const post = await prisma.post.findFirstOrThrow({
          where: { id: Number(resources_id) },
        });

        if (post.user_id === user_id) hasAccess = true;
        break;
    }

    if (!hasAccess) {
      throw { name: "Unauthorized", message: "You are not authorized" };
    }
    
    next();
  } catch (error) {
    next(error);
  }
};
