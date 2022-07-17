const Category = require('../database/category')


async function createCategory(req, res) {
    const { category } = req.body;

    let categoryDoc = await Category.create(category);

    return res.send({
        data: categoryDoc,
    })
}

async function getAllCategory(req, res) {
    let categories = await Category.find();

    return res.send({
        data: categories
    })
}

module.exports = {
    createCategory,
    getAllCategory,
}