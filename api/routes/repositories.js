const repositories = require('express').Router();
const reposActions = require("../controllers/repositories");

repositories.get('/:search/:page',(_req, _res, next) => {
    reposActions.getRepos(_req.params.search, _req.params.page)
        .then((res) => {
            _res.send(res).status(200);
        })
        .catch((err) => {
            _res.send(err).status(500);
        })
    
})

repositories.get('/:idRepo', (_req, _res, next) => {
    _res.send("It's working, i have a  repo ID "+_req.params.idRepo);
})

module.exports = repositories;