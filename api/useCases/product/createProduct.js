const { pool } = require("../../mysql")

function createProduct(req,res,next) {
    const imagePath = req.file?.filename;
    pool.getConnection((err,conn) => {
        err && res.status(500).send(err)
        const {name,price,description,quantity,id_category} = req.body
        conn.query(`INSERT INTO e_comerce.product (name, price, description, imagePath, quantity, id_category)
         values (?,?,?,?,?,?)`,
        [name,price,description,imagePath,quantity,id_category],
        err => {
            err && res.status(500).send(err)
        })
        conn.query('SELECT * FROM e_comerce.product',
        (err,result) => {
            conn.release()
            err && res.status(500).send(err)
            res.status(201).send(result)
        })
    })
}

module.exports = createProduct
