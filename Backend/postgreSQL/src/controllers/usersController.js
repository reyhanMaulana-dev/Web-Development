import axios from 'axios';
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
}

export const userController = new UserController();

