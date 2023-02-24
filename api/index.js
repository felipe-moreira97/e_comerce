require('dotenv').config({ path: '.env' })
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./routes/routes')
const port = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors({ origin: true, credentials: true }))
app.use(router)
app.use(express.static('./public'))

app.listen(port, () => console.log(`API online on port ${port} at http://localhost:${port}`))
