const { faker } = require("@faker-js/faker");

const UserModel = () => {
    const newFake = {
        password: faker.internet.password({ length: 16 }),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.string.uuid(),
    };
    return newFake;
};

module.exports = UserModel();

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
