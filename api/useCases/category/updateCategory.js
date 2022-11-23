const { pool } = require('../../mysql')

function updateCategory(req,res,next) {
    pool.getConnection((err,conn) => {
        err && res.status(500).send(err)
        const {category} = req.body
        conn.query(`UPDATE e_comerce.category SET
        category = ?
        WHERE id_category = ?`,
        [category,req?.params.id],
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
module.exports = updateCategory