const todosController = require('./controllers/index').todos

module.exports = (app) => {
    app.get('/api', (req, res) => {
        res.status(200).send({
            message: 'Todos API!'
        })
    })

    app.post('/api/todos', todosController.create)
}