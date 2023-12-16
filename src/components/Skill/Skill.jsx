import React from 'react'
import styles from "./Skill.module.css"
import { getImageUrl } from '../../util'
export const Skill = () => {
  return (
    <section className={styles.container} id='skill'>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <img className={styles.skillImg} src={getImageUrl("skill/myphoto.jpg")} alt="My photo"/>
        <ul className={styles.skillItems}>
          <li className={styles.skillItem}>
            <img src={getImageUrl("skill/cursorIcon.png")} alt='Cursor icon'/>
            <div>
              <h3>Programing Languages</h3>
              <p>Java, Javascript, PHP, Bash</p>
            </div>
          </li>
          <li  className={styles.skillItem}>
            <img src={getImageUrl("skill/serverIcon.png")} alt='Server icon'/>
            <div>
              <h3>Web Development</h3>
              <p>HTML/CSS, React, VUE, Node.js, Springboot</p>
            </div>
          </li>
          <li  className={styles.skillItem}>
            <img src={getImageUrl("skill/uiIcon.png")} alt='UI icon'/>
            <div>
              <h3>Database</h3>
              <p>MySQL, MongoDB, Oracle</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
