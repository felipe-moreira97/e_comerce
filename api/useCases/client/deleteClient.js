const { pool } = require('../../mysql')
function deleteClient(req, res, next) {
    pool.getConnection((err, conn) => {
        err && res.status(500).send(err)
        conn.query('DELETE FROM e_comerce.client WHERE id_client = ?',
            [req?.params.id],
            err => {
                err && res.status(500).send(err)
            })
        conn.query('SELECT id_client, name, email FROM e_comerce.client',
            (err, result) => {
                conn.release()
                err && res.status(500).send(err)
                res.status(201).send(result)
            })
    })
}
module.exports = deleteClient
