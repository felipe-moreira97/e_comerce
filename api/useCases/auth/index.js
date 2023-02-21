const jwt = require('jsonwebtoken')

function auth(req,res,next) {
  const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : false
  jwt.verify(token,'secret',(err,decoded) => {
    if (err) {
        console.log(err)
      res.status(401).send({
        mensagem:"token inválido",
      })
    }
    if (decoded) {
      req.body.user = decoded
      next()
    }
  })
}

function authAdmin(req,res,next) {
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : false
    jwt.verify(token,'secret',(err,decoded) => {
        console.log(decoded)
        if (err) {
            res.status(401).send({
                mensagem:"token inválido",
            })
        }
        if (decoded) {
            if (!!decoded.isAdmin) {
                console.log(decoded.isAdmin)
                req.body.user = decoded
                next()
            } else {
                res.status(401).send({
                    mensagem:'usuário não autorizado'
                })
            }
        }
    })
}
exports.auth = auth
exports.authAdmin = authAdmin
