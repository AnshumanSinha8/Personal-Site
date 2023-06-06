const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./graphql/typeDefs.js");
const { resolvers } = require("./graphql/resolvers.js");
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

/*
So I think that I'm finally starting to understand a bit more on how exactly I should be deploying this with all of the
technologies together (Prisma, GraphQL, Apollo Server, Vercel, Next.js). I'm going to use this space
to note what steps I believe I need to take to set up this project as serverless.

First:
- Need to set up the pages/api/... files instead of a server directory.
  - this means that I really just need to relocate the server.js file into the pages directory and then rename
  it to index.js to follow default behaviors. From there I can keep most of the content and code inside relatively
  the same, just update the path routes to the queries/resolvers/typeDefs file once I also move those into the 
  pages/api directory too.
  - I'm going to make a pages/api/graphql directory and this is where I will house the queries/resolvers/typeDefs
  files.

Second:
- Need to create Prisma migrations.
  - These migrations will enable us to handle database operations on our MySQL Planetscale databse.
  - This can come later as I still eed to set up queries to make changes to the db as it's very simple create
  tables and row queries only so far for testing purposes.
*/