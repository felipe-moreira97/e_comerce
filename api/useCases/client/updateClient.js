const { pool } = require('../../mysql')
const bcrypt = require('bcrypt')

function updateClient(req, res, next) {
    pool.getConnection((err, conn) => {
        err && res.status(500).send(err)
        const { name, email, password } = req.body
        const hash = password ? bcrypt.hashSync(password, parseInt(process.env.HASH_SALT)) : false

        const query = [`${name ? ` name = '${name}'` : ''}`, `${email ? ` email = '${email}'` : ''}`, `${hash ? ` hash = '${hash}' ` : ''}`].filter(data => !!data).toString()
        conn.query(`UPDATE e_comerce.client SET${query} WHERE id_client = ?`,
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
module.exports = updateClient
