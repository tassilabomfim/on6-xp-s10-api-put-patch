const express = require('express')
const app = express() // instanciando 
const router = require('./routers/gamesRouter')

app.use(express.json())
app.use('/', router)

module.exports = app