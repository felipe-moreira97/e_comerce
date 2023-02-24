const { pool } = require('../../mysql')
function deleteAdmin(req, res, next) {
    pool.getConnection((err, conn) => {
        err && res.status(500).send(err)
        conn.query('DELETE FROM e_comerce.admin WHERE id_admin = ?',
            [req?.params.id],
            err => {
                err && res.status(500).send(err)
            })
        conn.query('SELECT id_admin, name, email FROM e_comerce.admin',
            (err, result) => {
                conn.release()
                err && res.status(500).send(err)
                res.status(201).send(result)
            })
    })
}
module.exports = deleteAdmin
