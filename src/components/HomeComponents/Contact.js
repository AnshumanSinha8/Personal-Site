import styles from 'src/styles/HomeStyles/Contact.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import React, { useState } from 'react';


  


function Contact() {
    const [charactersLeft, setCharactersLeft] = React.useState(300);
  
    function handleMessageInput(event) {
      const message = event.target.value;
      const maxLength = event.target.maxLength;
      const charactersLeft = maxLength - message.length;
      setCharactersLeft(charactersLeft);
    }
  
    return (
      <div className={styles.contact}>
        <div>
          <form className={styles.form}>
            <label>
              <input type="text" name="firstName" placeholder="First Name" />
            </label>
            <label>
              <input type="text" name="lastName" placeholder="Last Name" />
            </label>
            <br />
            <label>
              <input type="email" name="email" placeholder="Email Address" />
            </label>
            <br />
            <label>
              <textarea
                name="message"
                rows="6"
                cols="40"
                maxLength="300"
                placeholder="Enter your message here"
                onInput={handleMessageInput}
              ></textarea>
              <div>{charactersLeft} characters left</div>
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
  
        <div className={styles.profileWrapper}>
          <a href="https://github.com/AnshumanSinha8" target="_blank">
            <div className={styles.profile}>
              <FaGithub />
              Github
            </div>
          </a>
          <a href="https://www.linkedin.com/in/anshuman-sinha1998/" target="_blank">
            <div className={styles.profile}>
              <FaLinkedin />
              Linkedin
            </div>
          </a>
        </div>
      </div>
    );
  }
  

export default Contact;