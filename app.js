const express = require('express')
const mongoose = require('mongoose')
const schema = require('./schema')
const bodyParser = require('body-parser')
const cors = require('cors')

const { ApolloServer } = require('apollo-server-express')

const url = 'mongodb://localhost:27017/airbnb-db'

const connect = mongoose.connect(url, { useNewUrlParser: true })
connect.then((db) => {
  console.log('Connected correctly to server!')
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

const port = 3001

app.listen(port, () => 
  console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
)