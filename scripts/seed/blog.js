const { faker } = require('@faker-js/faker')
const connectDatabase = require('../../database')
const Category = require('../../database/category')
const Blog = require('../../database/blog')

async function createFakeBlogs(count) {

    const categories = await Category.find();

    for (let i = 0; i < count; i++) {
        const blog = {
            title: faker.hacker.phrase(),
            content: faker.lorem.paragraph(100),
            category: categories[Math.floor(Math.random() * 53)]
        };

        await Blog.create(blog)

    }
}

connectDatabase().then(() => {
    createFakeBlogs(50);
})