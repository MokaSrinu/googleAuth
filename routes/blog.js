const express = require('express');
const { getAllBlogs, getSingleBlog, createBlog, updateBlog, deleteBlog } = require('../handlers/blog');

const blogRouter = express.Router()

blogRouter.get('/blogs/all', getAllBlogs);
blogRouter.get('/blogs/:id', getSingleBlog);
blogRouter.post('/blogs', createBlog);
blogRouter.patch('/blogs/:id', updateBlog);
blogRouter.delete('/blogs/:id', deleteBlog);

module.exports = blogRouter;