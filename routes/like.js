const express = require('express');
const { getAllLikes, createLike } = require('../handlers/like');

const likesRouter = express.Router()

likesRouter.get('/likes', getAllLikes);
likesRouter.post('/likes', createLike);

module.exports = likesRouter;
