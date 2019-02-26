const routes = require('express').Router();
const repositories = require('./repositories.js');

routes.get('/', (_req, _res, next) => {
    _res.send("It's working in /");
})

routes.use('/repositories', repositories );


module.exports = routes;