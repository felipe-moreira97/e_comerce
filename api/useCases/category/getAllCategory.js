const { pool } = require("../../mysql")

function getAllCategory(req,res,next) {
    pool.getConnection((err,conn) => {
        err && res.status(500).send(err)
        conn.query('SELECT * FROM e_comerce.category ORDER BY category',
        (err,result) => {
            conn.release()
            err && res.status(500).send(err)
            res.send(result)
        })
    })
}
module.exports = getAllCategory