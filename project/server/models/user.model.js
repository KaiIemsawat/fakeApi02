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
