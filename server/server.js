import express from 'express'
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(function (request, response, next) {
    console.log(`${Date.now()}: ${request.method}: ${request.path}`)
    next()
})

require('./routes')(app)

app.get('*', (req, res) => {
    res.status(200).send({
        message: 'I am a server route and can also be hot reloaded!!!'
    })
})


export default app