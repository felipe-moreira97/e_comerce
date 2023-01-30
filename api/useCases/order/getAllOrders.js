const { pool } = require("../../mysql")
const processResponse = require('./processResponse')


function getAllOrders(req,res,next) {
    const id = req.body.user.id
    if (req.body.user.isAdmin) {
        pool.getConnection((err,conn) => {
            err && res.status(500).send(err)
            conn.query(`SELECT h.id_order, o.status, o.timestamp, o.id_client, cl.name as client,
            h.id_product, p.name as product, p.price, p.description, p.imagePath, h.quantity, c.category
            FROM e_comerce.order_has_product h
           INNER JOIN e_comerce.order o ON h.id_order = o.id_order
           INNER JOIN e_comerce.product p ON h.id_product = p.id_product
           INNER JOIN e_comerce.client cl ON o.id_client = cl.id_client
           INNER JOIN e_comerce.category c ON p.id_category = c.id_category ORDER BY h.id_order LIMIT 0, 1000`,
            (err,result) => {
                conn.release()
                err && res.status(500).send(err)
                const orderList = processResponse(JSON.parse(JSON.stringify(result)))
                res.send(orderList)
            })
        })
    } else {
        pool.getConnection((err,conn) => {
            err && res.status(500).send(err)
            conn.query(`SELECT h.id_order, o.status, o.timestamp, o.id_client, cl.name as client,
            h.id_product, p.name as product, p.price, p.description, p.imagePath, h.quantity, c.category
            FROM e_comerce.order_has_product h
           INNER JOIN e_comerce.order o ON h.id_order = o.id_order
           INNER JOIN e_comerce.product p ON h.id_product = p.id_product
           INNER JOIN e_comerce.category c ON p.id_category = c.id_category
           INNER JOIN e_comerce.client cl ON o.id_client = cl.id_client WHERE cl.id_client = ?
            ORDER BY h.id_order LIMIT 0, 1000`,
            [id],
            (err,result) => {
                conn.release()
                err && res.status(500).send(err)
                const orderList = processResponse(JSON.parse(JSON.stringify(result)))
                res.send(orderList)
            })
        })
    }
}
module.exports = getAllOrders
