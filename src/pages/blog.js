const posts = [
    {title: 'testing', excerpt: 'Learn Testing'},
    {title: 'React', excerpt: 'Learn React'}
]

export default function Blog() {
    return (
        <div className ="grid">
            Blog
            {posts.map((posts, index) => (
                <div key = {index}>
                    {posts.title}
                    {posts.excerpt}
                </div>
            ))}
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
- I feel like I've currently completed everything properly up to here.
- Create Prisma Schema --> COMPLETED
- I think I did this step correctly, but definitely still have questions. First bugs likely appearing here.
- ACtually, going to remove Prisma from the project. I don't think the database will need to be interacted with much and can add as an extension later if needed.
- Create GraphQL-Yoga Schema --> IN PROGRESS
- Connect GraphQL Server with database --> IN PROGRESS
- GraphQL fetch from database --> 

- Honetly this seems like a lot. Especially since now I need to develop this front end Blog stuff to interact with the graphQL routes and database.
- But I have to do it because otherwise how will I learn how to actually build and accomplish these engineering feats and not just algorithms!
- One thing I need to learn more about is the file structuring and typical routes for  this in Next.js. The APIs go through the pages component, but I wonder how exactly that translates from the typical 'server' directory in most other React applications.
*/