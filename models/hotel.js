const mongoose = require('mongoose')

const Schema = mongoose.Schema
const hotelSchema = new Schema({
  hotel_name: {
    type: String,
    required: [true, 'Please enter hotel name'],
    trim: true
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
})

var Hotel = mongoose.model('Hotel', hotelSchema)
module.exports = {Hotel, hotelSchema}