import 'dotenv/config'
import pg from 'pg'

const { Pool } = pg
const pool = new Pool({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: process.env.POSTGRES_PASSWORD,
    database: 'jds',
    max: 20,
    idleTimeoutMilllis: 3000,
    connectionTimeoutMilllis: 2000
})

const fetchUsers = async ()=> {
    const { rows : users } = await pool.query('SELECT * FROM "Users"');
    console.log(users);
}

fetchUsers();