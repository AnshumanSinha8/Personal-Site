// import styles from 'src/styles/Blog.module.css';
import Navigation from '../components/Navigation.js';
import Header from '../components/Header.js'
import PageSelector from '../components/BlogComponents/PageSelector.js'
import Filter from '../components/BlogComponents/Filter.js';
import styles from '../styles/BlogStyles/Blog.module.css';
import CardContainer from '../components/BlogComponents/CardContainer.js';

const headerContent = {
    title: 'Welcome to my Blog!', excerpt: `Here you can read my thoughts!`
  };

export default function Blog() {
    return (
            <div className={styles.blog}>
                <Header headerContent={headerContent}/>
                <Navigation />
                <Filter />
                <CardContainer />
                <div>
                    <PageSelector />
                </div>
            </div>
    )
}