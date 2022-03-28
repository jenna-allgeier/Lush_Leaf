const db = require('../db')
const { Plant, Comment } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createComments = async () => {
    const comments = [
        {
            text: 'This plant looks so nice!'
        }
    ]
    await Comment.insertMany(comments);
    console.log('Created comments!');
    return comments;
}

const createPlants = async (comments) => {
    console.log(comments)

    const plants = [
        { 
            nickname: "Fifi",
            common_name: "Fiddle Leaf Fig",
            adoption_date: 02/21/22,
            sun_needs: "Beach Umbrella",
            drinking_needs: "Only on special occasions.",
            notes: "Last watered 03/05/22.",
            comments: comments._id,
            image: "/assets/Fifi.png"
        },
        {
            nickname: "Bluey",
            common_name: "Cebu Blue Pothos",
            adoption_date: 02/21/22,
            sun_needs: "Beach Umbrella",
            drinking_needs: "Just one please.",
            notes: "Last watered/repotted 03/24/22.",
            comments: comments._id,
            image: "/assets/Bluey.png"
        },
        {
            nickname: "Angelica",
            common_name: "Ficus Bonsai",
            adoption_date: 02/21/22,
            sun_needs: "Sun Bather",
            drinking_needs: "Heavy Drinker",
            notes: "Last watered 03/26/22. Last fertilized 03/20/22",
            comments: comments._id,
            image: "/assets/Angelica.png"
        }
    
    ]

    await Plant.insertMany(plants)
    console.log(plants)
    console.log("Created some plants!")
}


const run = async () => {
    const comments = await createComments();
    await createPlants(comments);

    db.close()
}


run()