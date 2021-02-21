const mongoose = require('mongoose')
const { Hotel } = require('./hotel')
const { User } = require('./User')

const Schema = mongoose.Schema
const bookingSchema = new Schema({
  hotel_id: {
    type: Schema.Types.ObjectId,
    ref: Hotel,
    required: true
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: User,
    required: true
  },
  booking_Date: {
    type: String,
  },
  booking_start: {
    type: String,
    required: true
  },
  booking_end: {
    type: String,
    required: true
  }
})

var Hotel = mongoose.model('Booking', bookingSchema)
module.exports = {Booking, bookingSchema}