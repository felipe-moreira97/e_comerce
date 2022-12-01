const mysql = require('mysql')
const pool = mysql.createPool({
    "user":"root",
    "host":"127.0.0.1",
    "password":"12345678",
    "port":"3306",
    "database":"e_comerce"
})
exports.pool = pool
