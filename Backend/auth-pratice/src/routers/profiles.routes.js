import express from "express"
import { profileController } from "../controllers/profiles.controller.js"
import { authentication } from "../middlewares/authentication.js"
import { userAuthorization } from "../middlewares/authorization.js"
const router = express.Router()

router.post("/", authentication, profileController.addProfile)

router.put("/:id", authentication, userAuthorization, profileController.updateProfile)

router.delete("/:id", authentication, userAuthorization, profileController.deleteProfile)

router.get("/", profileController.getUsers)
router.get("/:id", profileController.findProfile)
export default router