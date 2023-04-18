// If you're building a GraphQL API, you can use Prisma Client in your resolvers to read and write 
// data in the database based on incoming queries and mutations.

const { testPosts } = require ("../dummyData");

const resolvers = {
    Query: {
        getTestPosts(){
            return testPosts;
        }
    }
}

module.exports = { resolvers };