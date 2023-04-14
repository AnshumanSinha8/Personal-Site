// import styles from 'src/styles/Blog.module.css';
import Card from '../components/BlogComponents/Card.js'
import styles from '../styles/BlogStyles/Blog.module.css'
import Navigation from '../components/Navigation.js'

const posts = [
    {title: 'testing', excerpt: 'Learn Testing'},
    {title: 'React', excerpt: 'Learn React'}
]

export default function Blog() {
    return (
        <div className={styles.blog}>
            <div>
                {posts.map((post) => ( <Card post={post} key={post.title}/>
                    ))
                }
            </div>
            <Navigation />
            <div>
                temp
            </div>
        </div>
    )
}