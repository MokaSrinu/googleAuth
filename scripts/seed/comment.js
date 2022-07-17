const { faker } = require('@faker-js/faker')
const connectDatabase = require('../../database')
const User = require('../../database/user')
const Blog = require('../../database/blog')
const Comment =require('../../database/comment')

async function createFakeComments(count) {

    const users = await User.find();
    const blogs = await Blog.find();

    for (let i = 0; i < count; i++) {
        const comment = {
            message:faker.lorem.paragraph(5),
            rating:Math.floor(Math.random() * 10),
            blog: blogs[Math.floor(Math.random() * 53)],
            user: users[Math.floor(Math.random() * 53)]
        };
        await Comment.create(comment)
    }
}

connectDatabase().then(() => {
    createFakeComments(50);
})