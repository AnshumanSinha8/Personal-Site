const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./typeDefs.js");
const { resolvers } = require("./resolvers.js");
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


console.log("Creating ApolloServer instance...");
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    console.log("Inside context function...");
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
√ - Need to set up the pages/api/... files instead of a server directory.
  √ - this means that I really just need to relocate the server.js file into the pages directory and then rename
  it to index.js to follow default behaviors. From there I can keep most of the content and code inside relatively
  the same, just update the path routes to the queries/resolvers/typeDefs file once I also move those into the 
  pages/api directory too.
  √ - I'm going to make a pages/api/graphql directory and this is where I will house the queries/resolvers/typeDefs
  files.

Second:
- The first part has been succesfully completed but it doesn't look like it solved the problem. It looks like we
are still relying on running a server locally at port 4000 from the client-side deployment, which means that we
are targeting port 400 as our server even when deployed and when it's not running.
- I think that this means I am missing either a proper endpoint for where the client-side should be targeting our API requests
(aka the serverless system), the server-side code is still improper and it's telling our client side to try and complete
the endpoint at the wrong place, or that everything in the sreverless etup is okay and I need to be directing the
serverless API calls elsewhere.
- I know it sounds weird but I actually think it's option number 3. We want to utilize client-side rendering in this
NExt.js application which means that we should be directing the API calls back to itself; This is how Jester works
and almost all other distributed systems and deployed applications I have seen. However this is graphQL not REST so
I'm unsure if the approach is the same but I think it makes sense in theory.
  - The pages/api directory is just defining our routes, we need to also make this API call to the application itself.
  - So let's create a fetchApi function that fulfills this purpose. So we need to create a new Apollo Client not
  inside the pages/api directory but rather the entry point for our application so we can make api requests at all
  possible pages inside our application. So essentially, I need to try moving the Apollo Client generation from 
  pages/api/index.js to src/pages/index.js.




Finally:
- Need to create Prisma migrations.
  - These migrations will enable us to handle database operations on our MySQL Planetscale databse.
  - This can come later as I still eed to set up queries to make changes to the db as it's very simple create
  tables and row queries only so far for testing purposes.
*/