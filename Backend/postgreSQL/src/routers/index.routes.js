import express from 'express';
import { userController } from '../controllers/usersController.js';
import { productController } from '../controllers/productsController.js';
const router = express.Router();

// Users
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.findUser);
router.get('/users/:id/products', userController.findUserProducts);

router.post('/users', userController.addUser);
router.post('/users/:id/orders', userController.addUserOrder)

router.delete('/users/:id', userController.removeUser);
router.put('/users/:id', userController.updateUser);

// Products
router.post('/products', productController.addProduct)
router.delete('/products/:id', productController.deleteProduct)
router.put('/products/:id', productController.updateProduct)

export default router;