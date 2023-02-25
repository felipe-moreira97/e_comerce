const { pool } = require("../../mysql")

function getAllClient(req, res, next) {
    pool.getConnection((err, conn) => {
        err && res.status(500).send(err)
        conn.query('SELECT id_client AS id, name, email FROM e_comerce.client ORDER BY name',
            (err, result) => {
                conn.release()
                err && res.status(500).send(err)
                res.send(result)
            })
    })
}
module.exports = getAllClient
