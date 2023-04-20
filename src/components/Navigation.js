import styles from 'src/styles/Navigation.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Navigation () {
  const router = useRouter();
  
  return (
    <div className={styles.navigation}>
      <Link href="/projects" className={`${styles.box} ${router.pathname === '/projects' ? styles.active : ''}`}>Projects</Link>
      <Link href="/" className={`${styles.box} ${router.pathname === '/' ? styles.active : ''}`}>Home</Link>
      <Link href="/blog" className={`${styles.box} ${router.pathname === '/blog' ? styles.active : ''}`}>Blog</Link>
    </div>
  )
}

export default Navigation;