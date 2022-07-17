const Comment = require('../database/comment')


async function createComment(req, res) {
    const { comment } = req.body;

    let commentDoc = await Comment.create(comment);

    return res.send({
        data: commentDoc,
    })
}

async function getAllComments(req, res) {
    let comments = await Comment.find().populate('user').populate('blog');

    return res.send({
        data: comments
    })
}

module.exports = {
    createComment,
    getAllComments,
}