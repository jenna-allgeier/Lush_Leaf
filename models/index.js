const { model } = require('mongoose')
const CommentSchema = require('./comment')
const PlantSchema = require('./plant')

const Plant = model('plants', PlantSchema)
const Comment = model('comments', CommentSchema)

module.exports = {
  Plant,
  Comment
}