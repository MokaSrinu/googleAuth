const mongoose = require('mongoose')

const likeSchema = new mongoose.Schema({
    user: {  // normalized approach of defining relationship
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    blog:{
        type: mongoose.Types.ObjectId,
        ref:'Blog'
    },
    emoji: String,  
}, {
    timestamps: true
})

const Like = mongoose.model('Like', likeSchema)

module.exports = Like;