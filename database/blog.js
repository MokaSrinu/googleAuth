const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    category: {  // normalized approach of defining relationship
        type: mongoose.Types.ObjectId,
        ref: 'Category'
    }
}, {
    timestamps: true
})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog;