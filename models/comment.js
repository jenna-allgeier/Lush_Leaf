let mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Comment = new Schema(
  {
    text: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Comment
// module.exports = mongoose.model('Comment', Comment)