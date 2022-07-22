const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    image: String,
    password: {
        type: String,
        select: false
    },
    address:String,
    blog: {  // normalized approach of defining relationship
        type: mongoose.Types.ObjectId,
        ref: 'Blog'
    },
    verified:{
        type: Boolean,
        default:false
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User;