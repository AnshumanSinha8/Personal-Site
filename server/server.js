const { ApolloServer } = require ("apollo-server")
const { typeDefs } = require ("./graphql/typeDefs.js")
// import { resolvers } from "./graphql/resolvers.js"
const { resolvers } = require("./graphql/resolvers");


const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(( {url} ) => {
  console.log(`server is listening on Port: ${url}!`)
})