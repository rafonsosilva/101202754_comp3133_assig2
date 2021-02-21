const express = require('express')
const mongoose = require('mongoose')
const schema = require('./graphql/typedefs/hotel')
const bodyParser = require('body-parser')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express')

const dotenv = require('dotenv')
dotenv.config()

const url = process.env.MONGODB_URL

const connect = mongoose.connect(url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

connect.then((db) => {
  console.log('Successfully connected to the server')
}, (err) => {
    console.log(err)
})

const server = new ApolloServer({
  typeDefs: schema.typeDefs,
  resolvers: schema.resolvers
})

const app = express()
app.use(bodyParser.json())
app.use('*', cors())
server.applyMiddleware({ app })
app.listen({ port: process.env.PORT }, () => 
  console.log(`Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
)