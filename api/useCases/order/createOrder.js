const { pool } = require("../../mysql")

function createOrder(req,res,next) {
    pool.getConnection((err,conn) => {
        err && res.status(500).send(err)
        const { products } = req.body

        conn.query(`SELECT * FROM e_comerce.product`,
        (err,result) => {
            const product = products.find(product => product.id_product == result.find(prod => product.quantity > prod.quantity).id_product)
            console.log(product)
            if (product) {
                res.status(401).send({
                    mensagem: 'quantidade em estoque insuficiente',
                    product
                })
            } else {
                insertOrderDb(req,res,next)
            }
        })
        conn.release()
    })
}

function insertOrderDb(req,res,next) {
    pool.getConnection((err,conn) => {
        err && res.status(500).send(err)
        const { products } = req.body
        const { id } = req.body.user
        products.forEach(product => {
            conn.query(`UPDATE e_comerce.product SET quantity = quantity - ${product.quantity} WHERE id_product = ${product.id_product};`,
            (err) => {
                err => err && res.status(500).send(err)
            })
        })
        conn.query(`INSERT INTO e_comerce.order (id_client) VALUES (?);`,
            [id],
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
        res.status(201).send({mensagem:'Pedido realizado com sucesso'})
    })
}
module.exports = createOrder
