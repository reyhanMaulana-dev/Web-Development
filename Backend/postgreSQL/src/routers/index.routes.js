import express from 'express';
import { userController } from '../controllers/usersController.js';

const router = express.Router();

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.findUsers);


export default router;