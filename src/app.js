
const express = require('express')
const cors = require('cors')
const route = require('./routes/Routes')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/familias', route)

module.exports = app
