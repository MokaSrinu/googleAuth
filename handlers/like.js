const Like = require('../database/like')


async function createLike(req, res) {
    const { like } = req.body;

    let likes = await Like.create(like);

    return res.send({
        data: likes,
    })
}

async function getAllLikes(req, res) {
    let likes = await Like.find().populate('user').populate('blog');

    return res.send({
        data: likes
    })
}

module.exports = {
    createLike,
    getAllLikes,
}