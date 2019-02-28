let getRepositories = require("../models/repositories");

const getRepos = (search, page) => {
    return new Promise((resolve, reject) => {
        getRepositories.getRepos(search, page, (err, res) => {
            if(err){reject(err)};
            resolve(res);
        })
    })
    .then((res) => {
        return res;
    })
    .catch((err) => {
        return err;
    })
}
module.exports = { getRepos };