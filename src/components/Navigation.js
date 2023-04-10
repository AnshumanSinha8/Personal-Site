import styles from 'src/styles/Navigation.module.css';

function Navigation () {
  return (
    <div className={styles.navigation}>
      <div className={styles.box}> Box 1 </div>
      <div className={styles.box}> Box 2 </div>
      <div className={styles.box}> Box 3 </div>
    </div>
  )
}

export default Navigation;