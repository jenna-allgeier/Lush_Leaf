const db = require('../db')
const { Plant, Comment } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const createPlants = async () => {
    const comments = await Comment.find({})

    const plants = [
        { 
            nickname: "Fifi",
            common_name: "Fiddle Leaf Fig",
            adoption_date: 02/21/22,
            sun_needs: "Beach Umbrella",
            drinking_needs: "Only on special occasions.",
            notes: "Last watered 03/05/22.",
            comments: comments[0]._id,
            image: "https://cmsmedia.remodelista.com/wp-content/uploads/2019/01/fiddle-leaf-fig-tree-ikea.png"
        },
        {
            nickname: "Bluey",
            common_name: "Cebu Blue Pothos",
            adoption_date: 02/21/22,
            sun_needs: "Beach Umbrella",
            drinking_needs: "Just one please.",
            notes: "Last watered/repotted 03/24/22.",
            comments: [comments[1]._id, comments[2]._id],
            image: "https://i0.wp.com/laidbackgardener.blog/wp-content/uploads/2019/01/20190123b-stayathomeplantmom-pinterest.com_-1.jpg?resize=950%2C942&ssl=1"
        },
        {
            nickname: "Angelica",
            common_name: "Ficus Bonsai",
            adoption_date: 02/21/22,
            sun_needs: "Sun Bather",
            drinking_needs: "Heavy Drinker",
            notes: "Last watered 03/26/22. Last fertilized 03/20/22",
            comments: [],
            image: "https://i.ebayimg.com/images/g/QQkAAOSwuxFYtZKt/s-l640.jpg"
        }
    
    ]

    await Plant.insertMany(plants)
    console.log(plants)
    console.log("Created some plants!")
}


const run = async () => {
    await createPlants();

    db.close()
}


run()