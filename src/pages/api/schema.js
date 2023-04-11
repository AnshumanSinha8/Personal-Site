const { GraphQLServer } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const typeDefs = `
  type Query {
    posts: [BlogPost!]!
  }

  type Mutation {
    createPost(
      author: String!,
      date: String!,
      title: String!,
      summary: String!,
      type: String!,
      length: Int!,
      likes: Int!,
      sections: [BlogPostSectionInput!]!
    ): BlogPost!
  }

  type BlogPost {
    id: Int!
    author: String!
    date: String!
    title: String!
    summary: String!
    type: String!
    length: Int!
    likes: Int!
    sections: [BlogPostSection!]!
  }

  type BlogPostSection {
    id: Int!
    sectionHeader: String!
    subsectionHeader: String
    content: String!
    listItems: String
    postId: Int!
  }

  input BlogPostSectionInput {
    sectionHeader: String!
    subsectionHeader: String
    content: String!
    listItems: String
  }
`

const resolvers = {
  Query: {
    posts: () => prisma.blogPost.findMany({ include: { sections: true } }),
  },
  Mutation: {
    createPost: async (_, args) => {
      const { author, date, title, summary, type, length, likes, sections } = args

      const post = await prisma.blogPost.create({
        data: {
          author,
          date,
          title,
          summary,
          type,
          length,
          likes,
          sections: {
            create: sections,
          },
        },
        include: {
          sections: true,
        },
      })

      return post
    },
  },
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})