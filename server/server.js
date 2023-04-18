const { ApolloServer } = require ("apollo-server");
const { typeDefs } = require ("./graphql/typeDefs.js");
const { resolvers } = require("./graphql/resolvers");
const { PrismaClient } = require('@prisma/client');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(( {url} ) => {
  console.log(`server is listening on Port: ${url}!`)
});