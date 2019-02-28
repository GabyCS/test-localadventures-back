const routes = require('express').Router();
const reposActions = require("../controllers/repositories");
routes.get('/', (_req, _res, next) => {
    _res.send("It's working in /");
})

routes.get('/repositories/:search/:page',(_req, res) => {
    reposActions.getRepos(_req.params.search, _req.params.page)
        .then((repos) => {
            res.status(200).send(repos);
        })
        .catch((err) => {
            res.status(500).send({err});
        })
    
})

routes.get('/repositories/info/:owner/:nameRepo', (_req, res) => {
    reposActions.getInfoRepo(_req.params.owner, _req.params.nameRepo)
        .then((repo) => {
            res.status(200).send(repo);
        })
        .catch((err) => {
            res.status(500).send({err});
        })
})

routes.get('/repositories/info/:owner/:nameRepo/:branch/commits', (_req, res) => {
    reposActions.getCommitsBranch(_req.params.owner, _req.params.nameRepo, _req.params.branch)
        .then((commits) => {
            res.status(200).send(commits);
        })
        .catch((err) => {
            res.status(500).send({err});
        })
})


module.exports = routes;