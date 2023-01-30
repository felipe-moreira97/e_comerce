const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mysql = require('../../mysql').pool

const login = (req,res,next) => {
    const email = req.body.email
    const password = req.body.password
    mysql.getConnection((err,conn) => {
        conn.query('SELECT * FROM e_comerce.client WHERE email = ?',
        [email],
        async (err,result,field)  => {
            conn.release()
            let hash = result[0]?.hash
            let isAdmin = false
            let id = result[0]?.id_client
            if (err) {
                return res.status(401).send({
                    mensagem:'erro de conecção'
                })
            }
            if (result.length < 1) {
                let [newIsAdmin,newHash,newId] = await adminQuery(email)
                isAdmin = newIsAdmin
                hash = newHash
                id = newId
            }
            bcrypt.compare(password,hash,(err,check) => {
                if (err) {
                    return res.status(401).send({
                        mensagem:'erro de autenticação'
                    })
                }
                if (check) {
                    const token = jwt.sign(
                        {
                            id,
                            email,
                            isAdmin
                        },
                        "secret",
                        {expiresIn:"1d"}
                    )
                    res.status(200).send({
                        mensagem:'autenticado com sucesso',
                        token
                    })
                } else {
                    return res.status(401).send({
                        mensagem:"senha incorreta"
                    })
                }
            })
        })
    })
}
const adminQuery =  email => {
    return new Promise ((resolve,reject) => {
        mysql.getConnection((err,conn) => {
            conn.query('SELECT * FROM e_comerce.admin WHERE email = ?',
            [email],
            (err,result,field) => {
                conn.release()
                if (err) {
                    let mensagem = 'erro de conecção'
                    reject(mensagem)
                }
                else if (result.length < 1) {
                    let mensagem = 'email incorreto'
                    reject(mensagem)
                } else {
                    resolve([true,result[0].hash,result[0].id_admin])
                }
            })
        })
    })
}
module.exports = login
