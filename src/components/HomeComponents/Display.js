import { useQuery, gql } from '@apollo/client';
import React from 'react';

const QUERY_ALL_POSTS = gql`
  query GetTestPosts {
    getTestPosts {
      id
      title
      content
    }
  }
`;

function Display() {
  const { data, loading, error } = useQuery(QUERY_ALL_POSTS);

  if (loading) {
    return <h1> Loading! </h1>;
  }

  if (error) {
    console.log(error);
  }

  if (data) {
    console.log(data);
  }

  return (
    <div>
      {data &&
        data.getTestPosts.map((post) => (
          <div key={post.id}>
            <h1> Post: {post.id} </h1>
          </div>
        ))}
    </div>
  );
}

export default Display;