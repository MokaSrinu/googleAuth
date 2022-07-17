const { faker } = require('@faker-js/faker')
const connectDatabase = require('../../database')
const User = require('../../database/user')
const Blog = require('../../database/blog')

async function createFakeUsers(count) {

    const blogs = await Blog.find();
    for (let i = 0; i < count; i++) {
        await User.create({
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
            email: faker.internet.email(),
            image: faker.internet.avatar(),
            password: faker.internet.password(),
            blog: blogs[Math.floor(Math.random() * 53)]
        })
        console.log('User added')
    }
}

connectDatabase().then(() => {
    createFakeUsers(50);
})