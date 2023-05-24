import styles from 'src/styles/HomeStyles/Contact.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link'
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
              <label className={styles.formLabel}>
                <textarea
                    name="message"
                    rows="6"
                    cols="40"
                    maxLength="300"
                    placeholder="Enter your message here"
                    onInput={handleMessageInput}/>
                <div className={styles.formHint}>
                    {charactersLeft} characters left
                    </div>
                    </label>
            <button type="submit">Submit</button>
            </form>
            </div>
            <br />
        <div>
          <Link href="https://github.com/AnshumanSinha8" target="_blank">
            <div className={styles.profile}>
              <FaGithub />
              Github
              </div>
            </Link>
          <Link href="https://www.linkedin.com/in/anshuman-sinha1998/" target="_blank">
            <div className={styles.profile}>
              <FaLinkedin />
              Linkedin
              </div>
            </Link>
            </div>
            </div>
    );
}

export default Contact;