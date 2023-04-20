import { gql } from '@apollo/client';

const queries = {
  FETCH_COMPONENT_BY_ID: gql`
    query GetTestPostById($id: Int!) {
      getTestPostById(id: $id) {
        id
        title
        content
      }
    }
  `,
  QUERY_ALL_POSTS: gql`
    query GetTestPosts {
      getTestPosts {
        id
        title
        content
      }
    }
  `,
};

export default queries;