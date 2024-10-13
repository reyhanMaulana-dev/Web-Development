import { query } from "express";
import { pool } from "../config/postgres.js";

class ProductsController {
    addProduct = async (req, res) => {
        try {
            const { product_name, price } = req.body;
            const response = await pool.query(`INSERT INTO "Products"(product_name, price) VALUES ('${product_name}', ${price})`)
            
            res.status(201).send(req.body)
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error')
        }
    }

    deleteProduct = async (req,res) => {
        try {
            const { id } = req.params
            const {rows : [product]} = await pool.query(`SELECT * FROM "Products" WHERE product_id = ${id}`)
            
            if(!product) throw new Error('Product not found')
                
            await pool.query(`DELETE FROM "Products" WHERE product_id = ${id}`)
            res.status(200).send(`Product deleted with ID: ${id}`)
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error')
        }
    }

    updateProduct = async (req,res) => {
        try {
            const { id } = req.params
            const { product_name, price } = req.body;
            const {rows : [product]} = await pool.query(`SELECT * FROM "Products" WHERE product_id = ${id}`)

            if(!product) throw new Error('Product not found')
            
            await pool.query(`UPDATE "Products" SET product_name = '${product_name}', price = ${price} WHERE product_id = ${id}`)
            res.status(200).send(req.body)
        } catch (error) {
            console.log(error);
            res.status(500).send('internal Server Error')
        }
    }
    
    findProductsUser = async (req,res) => {
        try {
            const { id } = req.params
            const {rows: response, rowCount} = await pool.query(`
                SELECT username, "Orders".order_id, product_name, price, quantity 
                FROM "Users"
                JOIN "Orders" USING(user_id)
                JOIN "Order_Items" USING(order_id)
                JOIN "Products" USING(product_id)
                WHERE user_id IN (${id})
                `);
           
            if(!rowCount) throw new Error
            res.send(response)
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error')
        }
    }
}

export const productController = new ProductsController();