const { gql } = require('apollo-server-express')

exports.typeDefs = gql`
  type User{
    id: ID!
    username: String!
    password: String!
    email: String!
  }

  type Query{
    getUsers: [User]
    getUserById: User
    getUserByUsername: User
  }

  type Mutation{
    addUser(
      username: String!
      password: String!
      email: String!
    ): User
  }
`