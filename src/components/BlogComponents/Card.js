// import styles from 'src/styles/Card.module.css';
import React from 'react';


function Card({ post }){
    return(
        <div>
            {post.title}{' '}
            {post.excerpt}
        </div>
    )
}


export default Card;