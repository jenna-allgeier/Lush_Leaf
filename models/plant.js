const { Schema } = require('mongoose')

const Plant = new Schema(
  {
    nickname: { type: String, required: true },
    common_name: { type: String, required: true },
    adoption_date: { type: Date, required: true },
    sun_needs: { type: String, required: true },
    drinking_needs: { type: String, required: true },
    image: { type: String, required: true}, 
    notes: { type: String, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'comments' }]
  },
  { timestamps: true }
)

module.exports = Plant