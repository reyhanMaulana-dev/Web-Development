import pg from 'pg'
const { Pool } = pg

export const pool = new Pool({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: process.env.POSTGRES_PASSWORD,
    database: 'jds',
    max: 20,
    idleTimeoutMilllis: 3000,
    connectionTimeoutMilllis: 2000
})

