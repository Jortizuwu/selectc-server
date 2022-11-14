const express = require('express')
const { createServer } = require('http')
const { ApolloServer } = require('@apollo/server')
const {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault
} = require('apollo-server-core')
const {
  ApolloServerPluginDrainHttpServer
} = require('@apollo/server/plugin/drainHttpServer')
const { startStandaloneServer } = require('@apollo/server/standalone')
const { makeExecutableSchema } = require('@graphql-tools/schema')
require('dotenv').config()

const { connection } = require('./db')
const typeDefs = require('./definitions')
const { validateJWT } = require('./helpers/auth')
const resolvers = require('./resolvers')

connection()

const schema = makeExecutableSchema({ typeDefs, resolvers })
const app = express()
const httpServer = createServer(app)

const server = new ApolloServer({
  schema,
  csrfPrevention: true,
  cache: 'bounded',
  cors: { origin: true },
  plugins: [
    process.env.NODE_ENV === 'prod'
      ? ApolloServerPluginLandingPageProductionDefault({ footer: false })
      : ApolloServerPluginLandingPageLocalDefault({ footer: false }),

    ApolloServerPluginDrainHttpServer({ httpServer })
  ]
})

;(async () => {
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => {
      const token = req.headers.authorization.replace('Bearer ', '') || ''
      const currentUser = validateJWT(token)
      return { currentUser }
    }
  })

  console.log(`🚀 Server listening at: ${url}`)
})()
