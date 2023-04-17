const { gql } = require("apollo-server");

const typeDefs = gql`
    type testPosts {
        id: Int!
        title: String!
        content: String!
    }

    type Query{
        getTestPosts: [testPosts!]!
    }
`

module.exports = {typeDefs}