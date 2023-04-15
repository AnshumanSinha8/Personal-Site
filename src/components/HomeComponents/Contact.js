import styles from 'src/styles/HomeStyles/Contact.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact(){
    return(
        <div className={styles.contact}>
            <div className={styles.form}>Contact Me!</div>
            <div className={styles.profileWrapper}>
                <a href="https://github.com/AnshumanSinha8" target="_blank">
                    <div className={styles.profile}>
                        <FaGithub/>
                        Github
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/anshuman-sinha1998/" target="_blank">
                    <div className={styles.profile}>
                        <FaLinkedin/>
                        Linkedin
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Contact;