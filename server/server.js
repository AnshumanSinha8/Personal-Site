const { ApolloServer } = require ("apollo-server");
const { typeDefs } = require ("./graphql/typeDefs.js");
const { resolvers } = require("./graphql/resolvers");
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Test function to log all posts in the testPosts schema:
async function main() {
  const allPosts = await prisma.testPosts.findMany();
  console.log(allPosts);
};

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(( {url} ) => {
  console.log(`server is listening on Port: ${url}!`)
});