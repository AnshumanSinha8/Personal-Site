const { gql } = require("apollo-server");

const typeDefs = gql`
    type testPosts {
        id: Int!
        title: String!
        content: String!
        topic: Topic!
    }

    type Query{
        getTestPosts: [testPosts!]!
    }

    enum Topic {
        Technology
        Adventure
        Story
    }
`

module.exports = {typeDefs}