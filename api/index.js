const express = require('express')
const app = express()
const port = 3001
const router = require('./routes/routes')
app.use(express.json())
app.use(router)




app.listen(port,() => console.log(`API online on port ${port} at http://localhost:${port}`))