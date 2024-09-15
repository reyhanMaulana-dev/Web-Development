import express from "express";
import { userController } from "../controllers/users.controller.js";
import { productController } from "../controllers/products.controller.js";

const router = express.Router();


router.get('/', (req, res) =>{
    res.send('hello')
})

router.get('/user', userController.getUsers);
router.get('/user/:id', userController.findUsers);

router.get('/products', productController.getProduct);
router.get('/products/:id', productController.findProduct);

export default router