const { faker } = require('@faker-js/faker')
const connectDatabase = require('../../database')
const User = require('../../database/user')
const Blog = require('../../database/blog')
const Like =require('../../database/like')

async function createFakeLikes(count) {

    const users = await User.find();
    const blogs = await Blog.find();

    for (let i = 0; i < count; i++) {
        const like = {
            emoji: faker.internet.avatar(),
            blog: blogs[Math.floor(Math.random() * 53)],
            user: users[Math.floor(Math.random() * 53)]
        };

        await Like.create(like)

    }
}

connectDatabase().then(() => {
    createFakeLikes(50);
})