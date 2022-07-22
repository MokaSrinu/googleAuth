const express = require('express');
const { getAllBlogs, getSingleBlog, createBlog, updateBlog, deleteBlog } = require('../handlers/blog');
const auth = require('./middlewares/auth');

const blogRouter = express.Router()

blogRouter.get('/blogs/all', getAllBlogs);
blogRouter.get('/blogs/:id', getSingleBlog);
blogRouter.post('/blogs',auth, createBlog);
blogRouter.patch('/blogs/:id',auth, updateBlog);
blogRouter.delete('/blogs/:id',auth, deleteBlog);

module.exports = blogRouter;