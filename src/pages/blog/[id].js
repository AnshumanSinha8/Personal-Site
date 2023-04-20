import { useQuery, gql, ApolloProvider } from '@apollo/client';
import { useRouter } from 'next/router'

const FETCH_COMPONENT_BY_ID = gql`
  query GetTestPostById($id: Int!) {
    getTestPostById(id: $id) {
      id
      title
      content
    }
  }
`;

function BlogPost() {
    const router = useRouter();
    const { id } = router.query;
    const parsedId = parseInt(id, 10);

    const { loading, error, data } = useQuery(FETCH_COMPONENT_BY_ID, {
      variables: { id: parsedId },
    });


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const post = data.getTestPostById;

    return (
      <ApolloProvider>
        <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
        </ApolloProvider>
    );
}

export default BlogPost;