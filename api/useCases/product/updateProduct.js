const { pool } = require('../../mysql')

function updateProduct(req, res, next) {
    const imagePath = req.file?.filename;
    pool.getConnection((err, conn) => {
        err && res.status(500).send(err)
        const { name, price, description, quantity, id_category } = req.body

        const query = [
            `${name ? ` name = '${name}'` : ''}`,
            `${price ? ` price = '${price}'` : ''}`,
            `${description ? ` description = '${description}'` : ''}`,
            `${quantity ? ` quantity = '${quantity}'` : ''}`,
            `${id_category ? ` id_category = '${id_category}'` : ''}`
        ].filter(data => !!data).toString()

        conn.query(`UPDATE e_comerce.product SET${query} WHERE id_product = ?`,
            [req?.params.id],
            err => {
                err && res.status(500).send(err)
            })
        conn.query('SELECT * FROM e_comerce.product',
            (err, result) => {
                conn.release()
                err && res.status(500).send(err)
                res.status(201).send(result)
            })
    })
}
module.exports = updateProduct
