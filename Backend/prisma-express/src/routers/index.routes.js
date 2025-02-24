import express from 'express'
import { userController } from '../controllers/users.Controllers.js';
import { cropController } from '../controllers/crops.Controllers.js';


const router = express.Router()

// Users
router.post(`/users`, userController.addUser)
router.put(`/users/:id`, userController.updateUser)
router.delete(`/users/:id`, userController.removeUser)
router.get(`/users`, userController.getUser)
router.get(`/users/:id`, userController.findUser)

// Crops
router.post(`/crops`, cropController.addCrop)
router.delete(`/crops/:userId`, cropController.removeCrop)
export default router;