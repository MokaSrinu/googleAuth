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
    const { user } = req.context
    //console.log("checking user",user)
    blog.user = user._id;

    blog = await Blog.create(blog);

    return res.send({
        data: blog
    })
}
 
async function updateBlog(req, res, next) {
    let {id} = req.params;
    let {blog: blogData} = req.body;
    const { user } = req.context;
    let blog = await Blog.findById(id);

    if (blog) {
        if (!checkPostBelongsToUser(blog, user)) {
            return res.status(401).send({
                error: "This blog does not belong to you. You can't delete it."
            })
        }
    } else {
        return res.status(404).send({
            error: "blog with given id does not exist."
        })
    }

    for (const [key, value] of Object.entries(blogData)) {
        blog[key] = value;
    }

    await blog.save();

    return res.send({
        data: blog
    })
}

function checkPostBelongsToUser(post, user) {
    console.log(post.user.toString(),user._id.toString())
    if (post.user.toString() == user._id.toString()) {
        return true
    }

    return false;
}


async function deleteBlog(req, res, next) {
    let {id} = req.params;

    const { user } = req.context

    const blog = await Blog.findById(id)


    if (blog) {
        if (!checkPostBelongsToUser(blog, user)) {
            return res.status(401).send({
                error: "This post does not belong to you. You can't delete it."
            })
        }
    } else {
        return res.status(404).send({
            error: "Post with given id does not exist."
        })
    }

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