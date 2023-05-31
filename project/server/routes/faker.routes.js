const FakerController = require("../controllers/faker.controller");

module.exports = (app) => {
    app.get("/api/users", FakerController.getUser);
    app.get("/api/companies", FakerController.getCompany);
};
