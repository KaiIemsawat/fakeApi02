const UserModel = require("../models/faker.model");
const CompanyModel = require("../models/faker.model");

// module.exports.getUser = (req, resp) => {
//     console.log(req.body);
//     resp.json(UserModel);
// };

// module.exports.getCompany = (req, resp) => {
//     console.log(req.body);
//     resp.json(CompanyModel);
// };

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
