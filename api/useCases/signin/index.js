const bcrypt = require('bcrypt')
const mysql = require('../../mysql').pool

const signin = (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const hash = bcrypt.hashSync(password, parseInt(process.env.HASH_SALT))
    if (!hash) {
        return res.status(401).send({
            mensagem: "Erro ao criar usuário bcrypt"
        })
    }
    mysql.getConnection((err, conn) => {
        if (err) {
            return res.status(401).send({
                mensagem: "Erro ao criar usuário conection"
            })
        }
        conn.query('INSERT INTO e_comerce.client (name,email,hash) VALUES (?,?,?)',
            [name, email, hash], (err, results, field) => {
                if (err) {
                    return res.status(401).send({
                        mensagem: "Erro ao criar usuário mysql"
                    })
                } else {
                    conn.release()
                    res.status(201).send({
                        mensagem: "usuário criado com sucesso"
                    })
                }
            })
    })
}
module.exports = signin
