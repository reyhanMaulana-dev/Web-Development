import express from "express"
import { roleController } from "../controllers/roles.controller.js"
import { authentication } from "../middlewares/authentication.js"
import { userAuthorization } from "../middlewares/authorization.js"

const router = express.Router()
router.post("/", authentication, userAuthorization, roleController.addRole)

router.get("/", authentication, userAuthorization, roleController.getRoles)
router.get("/:id", authentication, userAuthorization, roleController.findRole)

router.put("/:id", authentication, userAuthorization, roleController.updateRole)

router.delete("/:id", authentication, userAuthorization, roleController.deleteRole)
export default router