import styles from 'src/styles/BlogStyles/Card.module.css';
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

function Card({ post }){
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

    return(
        <div className={styles.card}>
            {post.title}{' '}
            {post.content}
        </div>
    )
}

export default Card;