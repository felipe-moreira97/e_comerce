const { pool } = require("../../mysql")

function getAllAdmin(req, res, next) {
    pool.getConnection((err, conn) => {
        err && res.status(500).send(err)
        conn.query('SELECT id_admin, name, email FROM e_comerce.admin ORDER BY name',
            (err, result) => {
                conn.release()
                err && res.status(500).send(err)
                res.send(result)
            })
    })
}
module.exports = getAllAdmin
