There are a few things to keep in mind with Prisma; especially when working on a project that is still in development.

- First off, introspection of your database will be important to keeping your prisma schema current. You can
run 'npx prisma db pull' in the command line to update your schema anytime you make a direct change to your
database.

- Also,remember to run 'npx prisma generate' anytime you edit your prisma schema. This way you can automatically
update your Prisma Client library as well.

- To explore the data in your database, you can run: 'npx prisma studio'. This will allow you to explore the database in Prisma Studio.

- remember that the typeDefs file inside of your server directory will not update automatically when making changes to Prisma or through any of the Prisma commands. If you edit the schema in your database, you also will need to edit the typeDefs to more closely match the new SQL schema you've implemented.

## Change the database schema (e.g. add more tables)
To evolve the app, you need to follow this flow:

- Manually adjust your database schema using SQL
- Re-introspect your database
- Optionally re-configure your Prisma Client API
- Re-generate Prisma Client