import styles from 'src/styles/BlogStyles/Card.module.css';
import { useQuery, gql } from '@apollo/client';
import Link from 'next/link'
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
        return <h6> Loading! </h6>;
    }

    if (error) {
        console.log(error);
    }

    if (data) {
        console.log(data);
    }

    return(
        <div className={styles.card}>
            <h6> {post.id}. {post.title}{' '}</h6>
            <p>{post.content.substring(0, 100)}...</p>
            <Link href="/blog/[id]" as={`/blog/${post.id}`}>
                <p>Read More</p>
                </Link>
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


Next:
I suppose first thing is to add a second test post to the database lol. √
Once added a second post and can render, need to create the cards to have better visual separation and design. √
After, need to set up <a or Link> tags inside each of these components and [dynamic] routing pages based on each id? or title? √

Then build this dynamic component to render the text/title/author/date/content when clicking on each Card component? -> This is harder said than done lol
*/