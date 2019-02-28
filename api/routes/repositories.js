const repositories = require('express').Router();
const reposActions = require("../controllers/repositories");

repositories.get('/:search/:page',(_req, _res) => {
    reposActions.getRepos(_req.params.search, _req.params.page)
        .then((res) => {
            _res.send(res).status(200);
        })
        .catch((err) => {
            _res.send(err).status(500);
        })
    
})

repositories.get('/info/:owner/:nameRepo', (_req, _res) => {
    reposActions.getInfoRepo(_req.params.owner, _req.params.nameRepo)
        .then((res) => {
            _res.send(res).status(200);
        })
        .catch((err) => {
            _res.send(err).status(500);
        })
})

repositories.get('/info/:owner/:nameRepo/:branch/commits', (_req, _res) => {
    reposActions.getCommitsBranch(_req.params.owner, _req.params.nameRepo, _req.params.branch)
        .then((res) => {
            _res.send(res).status(200);
        })
        .catch((err) => {
            _res.send(err).status(500);
        })
})
module.exports = repositories;