/* Your resolver should connect your GraphQL API to the MySQL database by executing SQL commands
and returning the results as GraphQL objects. */

const resolvers = {
    Query: {
      user: (parent, args) => {
        // Your resolver logic here
      }
    }
  };
  
  module.exports = resolvers;
  