import styles from 'src/styles/Navigation.module.css';
import Link from 'next/link';

function Navigation () {
  return (
    <div className={styles.navigation}>
      <a href="/blog" className={styles.box}>Blog</a>
      <Link href="/" className={styles.box}>Home</Link>
      <a href="/projects" className={styles.box}>Projects</a>
    </div>
  )
}

export default Navigation;