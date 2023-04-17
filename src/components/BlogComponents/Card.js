import styles from 'src/styles/BlogStyles/Card.module.css';
import React from 'react';


function Card({ post }){
    return(
        <div className={styles.card}>
            {post.title}{' '}
            {post.content}
        </div>
    )
}


export default Card;