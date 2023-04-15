import styles from 'src/styles/Header.module.css';

// const message = [{
//   home: 'A freelance software engineer - welcome to my website!',
//   blog: 'Welcome to my blog!'
// }];

function Header({ props }) {
  return (
    <div className={styles.header}>
      <h1>Hey, I&apos;m Anshu</h1>
      <p> A freelance software engineer - welcome to my website!</p>
    </div>
  );
}

export default Header;