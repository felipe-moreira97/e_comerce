const { pool } = require('../../mysql')
function deleteCategory(req,res,next) {
    pool.getConnection((err,conn) => {
        err && res.status(500).send(err)
        conn.query('DELETE FROM e_comerce.category WHERE id_category = ?',
        [req?.params.id],
        err => {
            err && res.status(500).send(err)
        })
        conn.query('SELECT * FROM e_comerce.category',
        (err,result) => {
            conn.release()
            err && res.status(500).send(err)
            res.status(201).send(result)
        })
    })
}
module.exports = deleteCategory