const { pool } = require('../../mysql')
const bcrypt = require('bcrypt')

function updateAdmin(req, res, next) {
    pool.getConnection((err, conn) => {
        err && res.status(500).send(err)
        const { name, email, password } = req.body
        const hash = password ? bcrypt.hashSync(password, parseInt(process.env.HASH_SALT)) : false

        const query = [`${name ? ` name = '${name}'` : ''}`, `${email ? ` email = '${email}'` : ''}`, `${hash ? ` hash = '${hash}' ` : ''}`].filter(data => !!data).toString()

        conn.query(`UPDATE e_comerce.admin SET${query} WHERE id_admin = ?`,
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
module.exports = updateAdmin
