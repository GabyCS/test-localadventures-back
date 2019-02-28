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

const getInfoRepo = (owner, nameRepo) => {
    return new Promise((resolve, reject) => {
        getRepositories.getInfoRepo(owner, nameRepo, (err, info) => {
            if(err){reject(err)};
            resolve(info);
        })
    }).then((info) => {
        return new Promise((resolve, reject) => {
            getRepositories.getBranchesRepo(owner, nameRepo, (err, branches) => {
                if(err){reject(err)};
                resolve({info,branches});
            })
        })
    })
    .then((res) => {
        return res;
    })
    .catch((err) => {
        return err;
    })
}

const getCommitsBranch = (owner, nameRepo, branch) => {
    return new Promise((resolve, reject) => {
        getRepositories.getCommitsBranch(owner, nameRepo, branch, (err, commits) => {
            if(err){reject(err)};
            resolve(commits);
        })
    }).then((res) => {
        return res;
    })
    .catch((err) => {
        return err;
    })
}
module.exports = { getRepos, getInfoRepo, getCommitsBranch };