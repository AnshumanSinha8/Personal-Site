import styles from 'src/styles/Navigation.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Navigation () {
  const router = useRouter();
  
  return (
    <div className={styles.navigation}>
      <a href="/projects" className={`${styles.box} ${router.pathname === '/projects' ? styles.active : ''}`}>Projects</a>
      <Link href="/" className={`${styles.box} ${router.pathname === '/' ? styles.active : ''}`}>Home</Link>
      <a href="/blog" className={`${styles.box} ${router.pathname === '/blog' ? styles.active : ''}`}>Blog</a>
    </div>
  )
}

export default Navigation;