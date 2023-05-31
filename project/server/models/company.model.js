const { faker } = require("@faker-js/faker");

const CompanyModel = () => {
    const companyFaker = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(true),
            city: faker.location.city(),
            state: faker.location.state({ abbreviated: true }),
            zipCode: faker.location.zipCode(),
            country: faker.location.country(),
        },
    };
    return companyFaker;
};
module.exports = CompanyModel();
