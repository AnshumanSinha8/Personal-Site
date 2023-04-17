// import styles from 'src/styles/Blog.module.css';
import Navigation from '../components/Navigation.js';
import Card from '../components/BlogComponents/Card.js';
import Header from '../components/Header.js'
import PageSelector from '../components/BlogComponents/PageSelector.js'
import Filter from '../components/BlogComponents/Filter.js';
import styles from '../styles/BlogStyles/Blog.module.css';


const posts = [
    {title: 'testing', content: 'Learn Testing'},
    {title: 'React', content: 'Learn React'}
]
const headerContent = {
    title: 'Welcome to my Blog!', content: `Here you can read my thoughts on things that matter to me. From technology to my travels I write articles over diverse topics so be sure to search for anything you might be interested in!`
  };

export default function Blog() {
    return (
        <div className={styles.blog}>
            <Header headerContent={headerContent}/>
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