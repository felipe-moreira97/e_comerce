const { pool } = require("../../mysql")

function createOrder(req,res,next) {
    pool.getConnection((err,conn) => {
        err && res.status(500).send(err)
        const { id_client, products } = req.body
        conn.query(`INSERT INTO e_comerce.order (id_client) VALUES (?);`,
            [id_client],
        err => err && res.status(500).send(err))
        conn.query(`SELECT LAST_INSERT_ID();`,
        (err,result) => {
            err && res.status(500).send(err)
            let id_order = result[0]['LAST_INSERT_ID()']
            products.forEach(product => {
                conn.query(`INSERT INTO e_comerce.order_has_product (id_product,id_order,quantity)
                    VALUES (?,?,?)`,
                    [product.id_product,id_order,product.quantity],
                    err => {
                        err && res.status(500).send(err)
                    }
                )
            })
            conn.release()
        })
        next()
    })
}
module.exports = createOrder