const { faker } = require('@faker-js/faker')
// const connectDatabase = require('../../database')
// const Category = require('../../database/category')


// async function createFakeCategory(count) {

//     for (let i = 0; i < count; i++) {
//         await Category.create({

//         })
//         console.log('category added')
//     }
// }

// connectDatabase().then(() => {
//     createFakeCategory(10);
// })

console.log(faker.lorem.paragraph(5))