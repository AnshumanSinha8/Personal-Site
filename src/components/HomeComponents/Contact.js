import styles from 'src/styles/HomeStyles/Contact.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact(){
    return(
        <div className={styles.contact}>
            <div>
        <form className={styles.form}>
            <h5>Contact Me!</h5>
            <label>
                <input type="text" name="firstName" placeholder="First Name"/>
                </label>
                <br />
            <label>
                <input type="text" name="lastName" placeholder="Last Name"/>
                </label>
                <br />
            <label>
                <input type="email" name="email" placeholder="Email"/>
                </label>
                <br />
            <label>
            
                <textarea name="message" placeholder="Message" rows="6" cols="40" maxLength="600"></textarea>
                </label>
                <br />
            <button type="submit">Submit</button>
        </form>
        </div>

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