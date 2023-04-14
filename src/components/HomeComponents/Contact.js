import styles from 'src/styles/HomeStyles/Contact.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact(){
    return(
        <div className={styles.contact}>
            <div className={styles.form}>Contact Me!</div>
            <div className={styles.profileWrapper}>
                <div className={styles.profile}>
                    <FaGithub/>
                    Github</div>
                <div className={styles.profile}>
                    <FaLinkedin/>
                    Linkedin</div>
            </div>
        </div>
    )
}

export default Contact;