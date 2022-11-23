const { pool } = require('../../mysql')

function updateProduct(req,res,next) {
    pool.getConnection((err,conn) => {
        err && res.status(500).send(err)
        const {name,price,description,image,quantity,id_category} = req.body
        conn.query(`UPDATE e_comerce.product SET
        name = ?, price = ?, description = ?,
        imagePath = ?, quantity = ?, id_category = ?
        WHERE id_product = ?`,
        [name,price,description,image,quantity,id_category,req?.params.id],
        err => {
            err && res.status(500).send(err)
        })
        conn.query('SELECT * FROM e_comerce.product',
        (err,result) => {
            conn.release()
            err && res.status(500).send(err)
            res.status(201).send(result)
        })
    })
}
module.exports = updateProduct
