import { pool } from '../config/postgres.js';

class UserController {
    getUsers = async (req, res)=> {
        try {
            const { rows : users } = await pool.query('SELECT * FROM "Users"');
            res.send(users)
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }
    
    findUser = async (req, res) => {
        try {
            const { id } = req.params
            const { rows : user, rowCount } = await pool.query(`SELECT * FROM "Users" WHERE user_id = ${id}`);
            
            if(!rowCount) throw new Error('User not found');
            
            res.send(user[0])
        } catch (error) {
            console.log(error.message);
            res.status(500).send('Internal Server Error');
        }
    }
    
    addUser = async (req, res) => {
        try {
            const { username, email } = req.body
            const response = await pool.query(`INSERT INTO "Users"(username, email) VALUES ('${username}', '${email}')`)
            console.log(response);
            
            res.status(201).json({
                message: 'User added',
                user: req.body
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).send('Internal Server Error');
        }
    }
    
    removeUser = async (req, res) => {
        try {
            const { id } = req.params
            const { rows : user, rowCount } = await pool.query(`SELECT * FROM "Users" WHERE user_id = ${id}`);
            
            if(!rowCount) throw new Error('User not found');
            await pool.query(`DELETE FROM "Users" WHERE "user_id" = ${id}`)         
            
            res.status(200).send({ message: `${user[0].username} has been removed`})
        } catch (error) {   
            console.log(error.message);
            res.status(500).send('Internal Server Error');
        }
    }

    updateUser = async (req, res) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const { rows : user } = await pool.query(`SELECT * FROM "Users" WHERE user_id = ${id}`)

            if(!user[0]) throw new Error(`Users not found`)

            let query = `UPDATE "Users" SET `;
            for (const key in body) {
                if (Object.prototype.hasOwnProperty.call(body, key)) {
                    query += `${key} = '${body[key]}', `
                }    
            }
            query = query.slice(0, -2)
            query += ` WHERE user_id = ${id}`
            
            await pool.query(query);
            res.status(200).send({
                message : 'User updated',
                user : req.body
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).send('Internal Server Error')
        }
    }

    findUserProducts = async (req,res) => {
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

    addUserOrder = async (req,res) => {
        try {
            const {id} = req.params
            const { products } = req.body           
    
            // Find User
            const { rows : [user] } = await pool.query(`SELECT * FROM "Users" WHERE user_id = ${id}`);
            if(!user) throw new Error('User not found');
            
            const date = new Date().toISOString().split('T')[0];
            
            /*
                Begin Transaction
            */

            await pool.query('BEGIN;');

            const {rows: [{ order_id: order_id}]} = await pool.query(`
                INSERT INTO "Orders"(order_date, user_id)
                VALUES('${date}', ${id})
                RETURNING *;
                `)
            
            for (const {product_id, quantity} of products) {
                // Find Product
                const {rows: [productFound]} = await pool.query(`SELECT * FROM "Products" WHERE product_id = ${product_id}`);
                if (!productFound) throw new Error('Product not found');
        
                // Create Multiple Order Items
                const createOrderItemQuery = `
                INSERT INTO "Order_Items" (order_id, product_id, quantity)
                VALUES ('${order_id}', '${product_id}', '${quantity}')
                RETURNING *`

                const newOrderItem = await pool.query(createOrderItemQuery);
            }
            await pool.query('COMMIT');
            res.status(200).send(`New Order has been created with ID: ${order_id}`)
        } catch (error) {
            await pool.query('ROLLBACK');
            console.log(error);
            res.status(500).send('Internal Server Error')
        }
    }
}

export const userController = new UserController();

