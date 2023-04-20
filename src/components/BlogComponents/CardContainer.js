import Card from './Card.js';
import { useQuery, gql } from '@apollo/client';
// import { QUERY_ALL_POSTS } from '../server/graphql/queries';

const QUERY_ALL_POSTS = gql`
query GetTestPosts {
  getTestPosts {
    id
    title
    content
  }
}
`;

function CardContainer() {
    const { data, loading, error } = useQuery(QUERY_ALL_POSTS);

    if (loading) {
        return <h1>Loading!</h1>;
        }

    if (error) {
        console.log(error);
        return <h1>Error!</h1>;
        }

    if (data) {
        console.log(data);
        }
    
    return (
        <div>
            {data.getTestPosts.map((post) => (
                <Card key={post.id} post={post} />
            ))}
            </div>
        );
}

export default CardContainer;