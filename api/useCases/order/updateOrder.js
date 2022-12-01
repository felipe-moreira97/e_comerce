const { pool } = require("../../mysql")

function updateOrder(req,res,next) {
    pool.getConnection((err,conn) => {
        err && res.status(500).send(err)
        const { products } = req.body
        const id_order = req.params.id
        products.forEach(product => {
            conn.query(`UPDATE e_comerce.order_has_product 
                SET quantity = ?
                WHERE id_order = ? AND id_product = ?`,
                [product.quantity,id_order,product.id_product],
                err => {
                    err && res.status(500).send(err)
                }
            )
        })
        conn.release()
    })
    next()
}

module.exports = updateOrder