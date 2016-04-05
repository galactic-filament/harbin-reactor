'use strict'
const express = require('express')


app.use('/node_modules', express.static('./node_modules'))
app.use('/build', express.static('./build'))
app.use('/static', express.static('./static'))

app.listen(80, () => console.log('Listening on 80'))

const exit = () => process.exit(0)
process.on('SIGTERM', exit)
process.on('SIGINT', exit)
