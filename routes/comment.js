const express = require('express');
const { getAllComments, createComment } = require('../handlers/comment');

const commentRouter = express.Router()

commentRouter.get('/comments', getAllComments);
commentRouter.post('/comments', createComment);

module.exports = commentRouter;