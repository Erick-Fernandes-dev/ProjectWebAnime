const express = require('express');
const routes = express.Router()
const animes = require('./animes')

routes.get('/', function (req, res) {
    return res.redirect("anime")
})

routes.get('/anime', function (req, res) {
    return res.render('anime/index')
})

routes.get("/anime/:id", animes.show)

routes.post("/anime", animes.post)

routes.get('anime/usuarios', function (req, res) {
    return res.send('Hello, user')
})

module.exports = routes