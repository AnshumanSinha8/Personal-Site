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
            {post.content.substring(0, 100)}...
        </div>
    )
}

export default Card;

/*
Strategy here: triying to figure out how to create a card component for each post in the database.

To do this, I need to be able to map over an array of post ids that populate from the database in the parent component.
So in the parent component (CardContainer) I need to query the database and return an array (or array of objects) that will have all of the posts ids.
From here I need to render a card component for each post id I return. When rendering this card component, I should pass in some props related to the post.header and posts.content.
(I should be uisng an excerpt, not a content but that hasn't been set up yet.)

I suppose first thing is to add a second test post to the database lol.
*/