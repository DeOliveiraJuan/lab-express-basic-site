const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/home', (req, res, next) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/about', (req, res, next) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.get('/masterpieces', (req, res, next) => {
    res.sendFile(__dirname + '/views/masterpieces.html')
})

app.listen(3001, () => {
    console.log('Listening on port 3001')
})