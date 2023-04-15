// import styles from 'src/styles/Blog.module.css';
import Navigation from '../components/Navigation.js';
import Card from '../components/BlogComponents/Card.js';
import Header from '../components/Header.js'
import PageSelector from '../components/BlogComponents/PageSelector.js'
import Filter from '../components/BlogComponents/Filter.js';
import styles from '../styles/BlogStyles/Blog.module.css';


const posts = [
    {title: 'testing', excerpt: 'Learn Testing'},
    {title: 'React', excerpt: 'Learn React'}
]

export default function Blog() {
    return (
        <div className={styles.blog}>
            <Header />
            <Navigation />
            <Filter />
            <div className={styles.postsContainer}>
                {posts.map((post) => ( <Card post={post} key={post.title}/>
                    ))
                }
            </div>
            <div>
                <PageSelector />
            </div>
        </div>
    )
}