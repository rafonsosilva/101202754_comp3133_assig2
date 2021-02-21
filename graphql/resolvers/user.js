import User from '../models/User'

export const userResolver = {
  Query: {
    getUsers: async (parent, args) => {
      return await User.find()
    },
    getUserById: async (parent, args) => {
      return await User.findById(args.id)
    },
    getUserByUsername: async (parent, args) => {
      return await User.findOne(args.username)
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const newUser = new User({
        username: args.username,
        password: args.password,
        email: args.email
      })
    }
  }
}