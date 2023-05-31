const UserModel = require("../models/user.model");
const CompanyModel = require("../models/company.model");

module.exports = {
    getUser: (req, resp) => {
        console.log(req.body);
        resp.json(UserModel);
    },
    getCompany: (req, resp) => {
        console.log(req.body);
        resp.json(CompanyModel);
    },
    getUserCompany: (req, resp) => {
        console.log(req.body);
        resp.json([UserModel, CompanyModel]);
    },
};
