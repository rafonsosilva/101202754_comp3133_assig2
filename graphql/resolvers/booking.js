import Booking from '../models/Booking'

export const bookingResolver = {
  Query: {
    getBookings: async (parent, args) => {
      return await Booking.find()
    }
  },
  Mutation: {
    addBooking: async (parent, args) => {
      const newBooking = new Booking({
        hotel_id: args.id,
        user_id: args.id,
        booking_date: args.booking_date,
        booking_start: args.booking_start,
        booking_end: args.booking_end
      })
    }
  }
}