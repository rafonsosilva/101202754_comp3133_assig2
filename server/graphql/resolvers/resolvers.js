const {Hotel} = require('../../models/Hotel')
const {User} = require('../../models/User')
const {Booking} = require('../../models/Booking')

exports.resolvers = {
  Query: {
    //Hotel queries
    getHotels: (parent, args) => {
      return Hotel.find()
    },
    getHotelById: (parent, args) => {
      return Hotel.findOne({'_id': args.id })
    },
    getHotelByName: (parent, args) => {
      return Hotel.findOne({'hotel_name':args.hotel_name})
    },
    getHotelByCity: (parent, args) => {
      return Hotel.find({'city': args.city})
    },

    //User queries
    getUsers: (parent, args) => {
      return User.find()
    },
    getUserById: (parent, args) => {
      return User.findOne({'_id': args.id })
    },
    getUserByUsername: (parent, args) => {
      return User.findOne({'username':args.username})
    },

    //Booking queries
    getBookings: (parent, args) => {
      return Booking.find()
    }
  },

  Mutation: {
    //Hotel mutations
    addHotel: (parent, args) => {
      let newHotel = new Hotel({
        hotel_name: args.hotel_name,
        street: args.street,
        city: args.city,
        postal_code: args.postal_code,
        price: args.price,
        email: args.email
      })
      return newHotel.save()
    },

    //User mutations
    addUser: (parent, args) => {
      let newUser = new User({
        username: args.username,
        password: args.password,
        email: args.email
      })
      return newUser.save()
    },

    //Booking mutations
    addBooking: (parent, args) => {
      let newBooking = new Booking({
        hotel: args.hotel_id,
        user: args.user_id,
        booking_start: args.booking_start,
        booking_end: args.booking_end
      })
      console.log(newBooking)
      return newBooking.save()
    }
  },

  Booking: {
    hotel: async (parent) => {
      return (await parent.populate("hotel").execPopulate()).hotel;
    },
    user: async (parent) => {
      return (await parent.populate("user").execPopulate()).user;
    },
  },
}