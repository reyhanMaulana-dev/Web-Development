import express from 'express';
import { userController } from '../controllers/usersController.js';
import { productController } from '../controllers/productsController.js';
import { orderController } from '../controllers/orderController.js';
const router = express.Router();

// Users
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.findUser);
router.post('/users', userController.addUser);
router.delete('/users/:id', userController.removeUser);
router.put('/users/:id', userController.updateUser);

// Products
router.post('/products', productController.addProduct)
router.delete('/products/:id', productController.deleteProduct)
router.put('/products/:id', productController.updateProduct)
router.get('/users/:id/products', productController.findProductsUser)

// Order
router.post('/users/:id/orders', orderController.addOrder)
export default router;