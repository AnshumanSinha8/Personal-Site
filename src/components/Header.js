import styles from 'src/styles/Header.module.css';

function Header({ headerContent }) {
  return (
    <div className={styles.header}>
      <h1> {headerContent.title} </h1>
      <p> {headerContent.excerpt} </p>
    </div>
  );
}

export default Header;