// If you're building a GraphQL API, you can use Prisma Client in your resolvers to read and write 
// data in the database based on incoming queries and mutations.

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    async getTestPosts() {
      const testPosts = await prisma.testPosts.findMany();
      return testPosts;
    },
    async getTestPostById(parent, { id }) {
      const testPost = await prisma.testPosts.findUnique({
        where: {
          id: id,
        },
      });
      return testPosts;
    },
  }
};

module.exports = { resolvers };