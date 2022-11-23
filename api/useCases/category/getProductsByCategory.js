const { pool } = require("../../mysql")

function getProductsByCategory(req,res,next) {
    pool.getConnection((err,conn) => {
        err && res.status(500).send(err)
        conn.query('SELECT * FROM e_comerce.product p WHERE id_category = ?',
        [req?.params.id],
        (err,result) => {
            conn.release()
            err && res.status(500).send(err)
            res.send(result)
        })
    })
}
module.exports = getProductsByCategory