import Hotel from '../models/Hotel'

export const hotelResolver = {
  Query: {
    getHotels: async (parent, args) => {
      return await Hotel.find()
    },
    getHotelById: async (parent, args) => {
      return await Hotel.findById(args.id)
    },
    getHotelByName: async (parent, args) => {
      return await Hotel.findOne(args.hotel_name)
    },
    getHotelByCity: async (parent, args) => {
      return await Hotel.find({'city': args.city})
    }
  },
  Mutation: {
    addHotel: async(parent, args) => {
      const newHotel = new Hotel({
        hotel_name: args.hotel_name,
        street: args.street,
        city: args.city,
        postal_code: args.postal_code,
        price: args.price,
        email: args.email
      })

      return await newHotel.save()
    }
  }
}