const github = require("octonode");

let client = github.client();
let ghsearch = client.search();

const getRepos = (search, page, cb) => {
    return ghsearch.repos({
            q: search,
            page: page,
            range_page: 20
        }, (err, res) => {
            cb(err, res);
        })
}

const getInfoRepo = (owner, nameRepo, cb) => {
    let ghrepo = client.repo(owner+"/"+nameRepo);
    return ghrepo.info((err, res) => {
            cb(err, res);
        })
}

const getBranchesRepo = (owner, nameRepo, cb) => {
    let ghrepo = client.repo(owner+"/"+nameRepo);
    return ghrepo.branches((err, res) => {
            cb(err, res);
        })
}

module.exports = { getRepos, getInfoRepo, getBranchesRepo };