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
- Once Database is created, need to somehow be able to access it. --> THINKING
- First need to connect it with an ORM? Going to use Prisma.
- Set up the Prisma Schema.
- Possibly set up a Prisma client to nteract with the database?
- Connect it through a local .env file.
- Once it's connected, we then need to be able to communicate between the frontend and the database.
- So to query the database, I am going to use GraphQL API
- To set up the GraphQL Middleware, need to create GraphQL resolvers that use the Prisma client?
    - Honestly this is a bit confusing but this is my best interpretation so far. Will learn more by doing it I suppose :)
- Now I can end this by setting up the GraphQL routes to fetch from the database. Can do this through Next.js qith API routes or SSR
    - I think I will try with API routes first bc from what I understand they're more optimized.

So to sumrize:
- Set up SQL table
- Set up Prisma Schema and Client.
- Connect through .env
- Connect GraphQL with Prisma resolvers
- GraphQL fetch from database

- Honetly this seems like a lot. Especially since now I need to develop this front end Blog stuff to interact with the graphQL routes and database.
- But I have to do it because otherwise how will I learn how to actually build and accomplish these engineering feats and not just algorithms!
*/