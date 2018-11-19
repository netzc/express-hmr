import express from 'express'

const app = express()

app.use(function (request, response, next) {
    console.log(`${Date.now()}: ${request.method}: ${request.path}`)
    next()
})

app.get('/api', (req, res) => {
    res.send({
        message: 'I am a server route and can also be hot reloaded!!!'
    })
})

export default app