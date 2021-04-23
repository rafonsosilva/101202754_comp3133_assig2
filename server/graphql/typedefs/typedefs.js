const { gql } = require('apollo-server-express')

exports.typeDefs = gql `
  
  type Hotel {
    id: ID!
    hotel_name: String!
    street: String!
    city: String!
    postal_code: String!
    price: Float!
    email: String!
  }

  type User{
    id: ID!
    username: String!
    password: String!
    email: String!
  }

  type Booking {
    id: ID!
    hotel: Hotel!
    user: User!
    createdAt: String!
    updatedAt: String!
    booking_start: String!
    booking_end: String!
  } 

  type Query{
    getHotels: [Hotel]
    getHotelById(id: ID!): Hotel
    getHotelByName(hotel_name: String): Hotel
    getHotelByCity(city: String): [Hotel]

    getUsers: [User]
    getUserById(id: ID!): User
    getUserByUsername(username: String): User

    getBookings: [Booking]

  }

  type Mutation {
    addHotel(
      hotel_name: String!
      street: String!
      city: String!
      postal_code: String!
      price: Float!
      email: String!
    ): Hotel

    addUser(
      username: String!
      password: String!
      email: String!
    ): User

    addBooking(
      hotel_id: ID!
      user_id: ID!
      booking_start: String!
      booking_end: String!
    ): Booking
  }

`