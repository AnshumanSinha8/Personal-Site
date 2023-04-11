export default function Blog() {
    return (
        <div>
            Blog
        </div>
    )
}

/* 
In order to connect this Blog to a backend database I need to do the following:
- Create a PlanetScale database (MySQL). --> COMPLETED
- Create a SQL table in there to hold the data I need for each blog post. --> COMPLETED
- Additional Tables? --> COMPLETED
- Create DEMO/Dummy data in these tables to test on. --> COMPLETED
- Once Database is created, need to somehow be able to access it. --> COMPLETED
- First need to connect it with an ORM? Going to use Prisma. --> COMPLETED
- Set up the Prisma Schema. --> COMPLETED
- Possibly set up a Prisma client to interact with the database? --> COMPLETED
- Connect it through a local .env file. --> CONNECTED
- Once it's connected, we then need to be able to communicate between the frontend and the database. --> NOTHING TODO HERE
- So to query the database, I am going to use GraphQL API --> NOTHING TODO HERE
- To set up the GraphQL Middleware, need to create GraphQL resolvers that use the Prisma client? --> WORKING
- Install either the ApolloServer or Yoga libraries to work with GraphQL. I think I will go with Yoga bc it's more lightweight.
    - Honestly this is a bit confusing but this is my best interpretation so far. Will learn more by doing it I suppose :) --> NOTHING TODO HERE
- Now I can end this by setting up the GraphQL routes to fetch from the database. Can do this through Next.js qith API routes or SSR
    - I think I will try with API routes first bc from what I understand they're more optimized.

So to sumrize:
- Set up SQL table --> COMPLETED
- Set up Prisma Schema and Client. --> COMPLETED
- Connect through .env --> COMPLETED
- Create Prisma Schema --> COMPLETED
- Create GraphQL-Yoga Schema --> IN PROGRESS
- Connect GraphQL with Prisma resolvers --> IN PROGRESS
- GraphQL fetch from database

- Honetly this seems like a lot. Especially since now I need to develop this front end Blog stuff to interact with the graphQL routes and database.
- But I have to do it because otherwise how will I learn how to actually build and accomplish these engineering feats and not just algorithms!
*/