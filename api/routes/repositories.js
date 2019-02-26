const repositories = require('express').Router();

repositories.get('/',(_req, _res, next) => {
    _res.send("It's working in repositories");
})

repositories.get('/:idRepo', (_req, _res, next) => {
    _res.send("It's working, i have a  repo ID "+_req.params.idRepo);
})

module.exports = repositories;