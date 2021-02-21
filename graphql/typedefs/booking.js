const { gql } = require('apollo-server-express')

exports.typeDefs = gql `
  type Booking {
    id: ID!
    hotel: Hotel!
    user: User!
    booking_date: String!
    booking_start: String!
    booking_end: String!
  }

  type Query{
    getBookings: [Booking]
  }

  type Mutation{
    addBooking(
      hotel_id: ID!
      user_id: ID!
      booking_date: String!
      booking_start: String!
      booking_end: String!
    ): Booking
  }
`