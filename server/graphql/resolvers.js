// If connected to a database, it is here in the resolvers functions that we will write our API calls to get data from the database!
// Still need to learn how to connect to PlanetScale database though.
const { testPosts } = require ("../dummyData");

const resolvers = {
    Query: {
        getTestPosts(){
            return testPosts;
        }
    }
}

module.exports = { resolvers };