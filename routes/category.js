const express = require('express');
const { getAllCategory, createCategory } = require('../handlers/category');

const categoryRouter = express.Router()

categoryRouter.get('/category', getAllCategory);
categoryRouter.post('/category', createCategory);

module.exports = categoryRouter;