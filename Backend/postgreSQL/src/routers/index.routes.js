import express from 'express';
import { userController } from '../controllers/usersController.js';
const router = express.Router();

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.findUser);

router.post('/users', userController.addUser);
router.delete('/users/:id', userController.removeUser);

export default router;