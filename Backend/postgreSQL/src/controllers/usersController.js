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
    
    findUsers = async (req, res) => {
        try {
            const { id } = req.params
            const { rows : user } = await pool.query(`SELECT * FROM "Users" WHERE user_id = ${id}`);
            if(user.length == 0) throw new Error('User not found');
            
            res.send(user[0])
        } catch (error) {
            console.log(error.message);
            res.status(500).send('Internal Server Error');
        }
    }
}

export const userController = new UserController();

