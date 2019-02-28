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

module.exports = { getRepos };