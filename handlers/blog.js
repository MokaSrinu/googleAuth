const Blog = require('../database/blog')
const Comment = require('../database/comment')

async function getAllBlogs(req, res, next) {
    const {skip, limit} = req.query;

    console.log(req.query)

    const blogs = await Blog.find().skip(skip).limit(limit).populate('category');

    return res.send({
        data: blogs
    })
}

async function getSingleBlog(req, res, next) {
    const {id} = req.params;

    let blog = await Blog.findById(id).populate('category');

    if (!blog) {
        return res.status(404).send({
            error: "blog was not found."
        })
    }

    // blog = blog.toJSON();
    
    // const comments = await Comment.find({
    //     blog: {
    //         id: blog._id
    //     }
    // })
    // blog.comments = comments;

    return res.send({
        data: blog
    })
}

async function createBlog(req, res, next) {
    let {blog} = req.body;

    blog = await Blog.create(blog);

    return res.send({
        data: blog
    })
}

async function updateBlog(req, res, next) {
    let {id} = req.params;
    let {blog: blogData} = req.body;

    let blog = await Blog.findById(id);

    for (const [key, value] of Object.entries(blogData)) {
        blog[key] = value;
    }

    await blog.save();

    return res.send({
        data: blog
    })
}

async function deleteBlog(req, res, next) {
    let {id} = req.params;

    await Blog.findByIdAndRemove(id);

    return res.send({
        message: "Post has been deleted."
    })

}

module.exports = {
    getAllBlogs,
    getSingleBlog,
    createBlog,
    updateBlog,
    deleteBlog,
}