const mongoose = require('mongoose')

const Schema = mongoose.Schema
const airbnbSchema = new Schema({
  hotel_id: {
    type: Number,
    required: true,
    unique: true
  },
  hotel_name: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  postal_code: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  user_id: {
    type: Number,
    required: true
  }
})

var Airbnb = mongoose.model('Airbnb', airbnbSchema)
module.exports = {Airbnb, airbnbSchema}