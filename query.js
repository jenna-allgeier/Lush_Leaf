// const db = require('./db')
// const { Plant, Comment } = require('./models')

// const findPlant = async () => {
//     const plants = await Plant.findOne()
//     console.log(plants)
// }

// const createPlant = async () => {

//     let plant = await Plant.create({
//         title: 'Harry Potter',
//         author: 'J.K. Rowling',
//         published_date: '2001-08-02',
//     })
//     console.log(plant)
// }

// const updatePlant = async () => {
//     const updated = await Plant.updateOne(
//         { title: 'Harry Potter' },
//         { published_date: '2002-06-14' }
//     )
//     console.log(updated)
// }

// const deletePlant = async () => {
//     let deleted = await Plant.deleteOne({ title: 'Harry Potter' })
//     console.log(deleted)
// }

// async function main() {
//     try {
//         await findPlant()
//         await createPlant()
//         await updatePlant()
//         await deletePlant()
//     } catch (error) {
//         console.log(error)
//     } finally {
//         await db.close()
//     }
// }

// main()