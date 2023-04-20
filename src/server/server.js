const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("../server/graphql/typeDefs.js");
const { resolvers } = require("../server/graphql/resolvers.js");
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      prisma,
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`Server is listening on Port: ${url}!`);
});
