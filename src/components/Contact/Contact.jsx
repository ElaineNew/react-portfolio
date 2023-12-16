import React from 'react'
import styles from "./Contact.module.css"
import { getImageUrl } from '../../util'

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
      <h2>Contact</h2>
      <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")}/>
          <a href="mailto:qiu00038@algonquinlive.com" alt="email icon">Email</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")}/>
          <a href="https://github.com/ElaineNew" alt="github icon">GitHub</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")}/>
          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" alt="linkedin icon">LinkedIn</a>
        </li>
      </ul>
    </footer>
  )
}
