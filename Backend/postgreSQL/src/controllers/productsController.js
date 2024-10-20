import { query } from "express";
import { pool } from "../config/postgres.js";

class ProductsController {
    addProduct = async (req, res) => {
        try {
            const { product_name, price } = req.body;
            const response = await pool.query(`
                INSERT INTO "Products"(product_name, price) 
                VALUES ('${product_name}', ${price})
                RETURNING *
                `)
            
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
            const {rows : [product]} = await pool.query(`SELECT * FROM "Products" WHERE product_id = ${id}`)
            if(!product) throw new Error('Product not found')
            
            let query = `UPDATE "Products" SET `
            const queries = [];
      
            for (const key in req.body) {
                queries.push(`${key} = '${req.body[key]}'`);
            }
            query += `${queries} WHERE product_id = ${id} RETURNING *`;           
            const {rows : [updatedProduct]} = await pool.query(query);
            res.status(200).send(updatedProduct)
        } catch (error) {
            console.log(error);
            res.status(500).send('internal Server Error')
        }
    }
}

export const productController = new ProductsController();