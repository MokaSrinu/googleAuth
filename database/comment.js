const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    message: String,
    rating: String,
    user: {  // normalized approach of defining relationship
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },

    // blog: { // embedding approach between comment and blog
    //     title: String,
    //     id: mongoose.Types.ObjectId
    // }
    blog:{
        type: mongoose.Types.ObjectId,
        ref:'Blog'
    }
}, {
    timestamps: true
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment;