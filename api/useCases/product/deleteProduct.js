const { pool } = require('../../mysql')
function deleteProduct(req,res,next) {
    pool.getConnection((err,conn) => {
        err && res.status(500).send(err)
        conn.query('DELETE FROM e_comerce.product WHERE id_product = ?',
        [req?.params.id],
        err => {
            err && res.status(500).send(err)
            conn.release()
            res.status(201).send({mensagem:'produto apagado com sucesso'})
        })
    })
}
module.exports = deleteProduct
