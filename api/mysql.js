const mysql = require('mysql')
const pool = mysql.createPool({
    "user": process.env.BD_USER,
    "host": process.env.BD_HOST,
    "password": process.env.BD_PASSWORD,
    "port": process.env.BD_PORT,
    "database": process.env.BD_DATABASE
})
exports.pool = pool
