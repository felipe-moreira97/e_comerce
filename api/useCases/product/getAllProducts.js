const { pool } = require("../../mysql")

function getAllProducts(req,res,next) {
    pool.getConnection((err,conn) => {
        err && res.status(500).send(err)
        conn.query('SELECT * FROM e_comerce.product',
        (err,result) => {
            conn.release()
            err && res.status(500).send(err)
            res.send(result)
        })
    })
}
module.exports = getAllProducts