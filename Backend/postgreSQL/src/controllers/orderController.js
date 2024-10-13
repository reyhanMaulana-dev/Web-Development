import { pool } from "../config/postgres.js";

class OrderController {
    addOrder = async (req,res) => {
        try {
            const {id} = req.params
            const { products } = req.body
            const date = new Date().toLocaleDateString('sv-SE')
            
            const { rows : [user] } = await pool.query(`SELECT * FROM "Users" WHERE user_id = ${id}`);
            if(!user) throw new Error('User not found');
            
            for (const e of products) {
                let {rows : [product]} = await pool.query(`SELECT * FROM "Products" WHERE product_id = ${e.product_id}`)
                if(!product) throw new Error('Product not found')   
            }

            let query = `
                BEGIN;

                WITH new_order AS (
                    INSERT INTO "Orders"(user_id, order_date)
                    VALUES (${id}, '${date}')
                    RETURNING order_id )

                    INSERT INTO "Order_Items"(order_id, product_id, quantity)
                    VALUES` // ((SELECT order_id FROM new_order), 1, 3);
    
                    // COMMIT;
                    
            for (const e of products) {
                query += ` ((SELECT order_id FROM new_order), ${e.product_id}, ${e.quantity}),`   
            }

            query = query.slice(0,-1)
            query += `; COMMIT;`
            await pool.query(query)

            res.status(200).send(products)
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error')
        }
    }
}

export const orderController = new OrderController();