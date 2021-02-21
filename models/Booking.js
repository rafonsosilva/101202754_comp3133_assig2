const mongoose = require('mongoose')
const { Hotel } = require('./Hotel')
const { User } = require('./User')

const { Schema } = mongoose

const BookingSchema = new mongoose.Schema({
  hotel: {
    type: Schema.Types.ObjectId,
    ref: "Hotel",
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  booking_start: {
    type: String,
    required: true
  },
  booking_end: {
    type: String,
    required: true
  }
}, {timestamps: true})

var Booking = mongoose.model('Booking', BookingSchema)
module.exports = {Booking}