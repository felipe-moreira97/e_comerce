const { pool } = require("../../mysql")

function createCategory(req,res,next) {
    pool.getConnection((err,conn) => {
        err && res.status(500).send(err)
        const {category} = req.body
        conn.query(`INSERT INTO e_comerce.category (category)
         values (?)`,
        [category],
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
module.exports = createCategory
