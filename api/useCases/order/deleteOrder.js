const { pool } = require("../../mysql")

function deleteOrder(req,res,next) {
    pool.getConnection((err,conn) => {
        err && res.status(500).send(err)
        const id_order = req.params.id
        conn.query(`DELETE FROM e_comerce.order_has_product 
                WHERE id_order = ?`,
                [id_order],
                err => {
                    err && res.status(500).send(err)
                }
        )
        conn.query(`DELETE FROM e_comerce.order 
            WHERE id_order = ?`,
            [id_order],
            err => {
                err && res.status(500).send(err)
            }
        )
        conn.release()
        next()
    })
}

module.exports = deleteOrder