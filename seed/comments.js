const db = require('../db')
const { Comment } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createComments = async () => {
    const comments = [
        {
            text: "This plant looks so nice!"
        },
        {
            text: "I like the pot!"
        },
        {
            text: "Looks nice and healthy."
        },
    ]
    await Comment.insertMany(comments);
    console.log('Created comments!');
    return comments;
}

const run = async () => {
    await createComments();

    db.close()
}


run()