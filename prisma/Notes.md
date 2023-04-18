There are a few things to keep in mind with Prisma; especially when working on a project that is still in development.

- First off, introspection of your database will be important to keeping your prisma schema current. You can
run 'npx prisma db pull' in the command line to update your schema anytime you make a direct change to your
database.

- Also,remember to run 'npx prisma generate' anytime you edit your prisma schema. This way you can automatically
update your Prisma Client library as well.