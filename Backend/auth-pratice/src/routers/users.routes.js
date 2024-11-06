import express from "express"
import { userController } from "../controllers/users.controller.js"
import { authentication } from "../middlewares/authentication.js"
import { userAuthorization } from "../middlewares/authorization.js"

const router = express.Router()

router.post("/register", userController.register)
router.post("/login", userController.login)

router.get("/", userController.getUsers)
router.get("/:id", userController.findUser)

router.put("/:id", authentication, userAuthorization, userController.updateUser)

router.delete("/:id", authentication, userAuthorization, userController.deleteUser)
export default router   