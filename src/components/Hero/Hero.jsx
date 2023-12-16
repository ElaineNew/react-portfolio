
import React from 'react'

import styles from './Hero.module.css'
import { getImageUrl } from '../../util'
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
      <h1 className={styles.title}> Hi, I'm Elaine Qiu!</h1>
      <p className={styles.description}>I'm a passionate Software Developer/Web Developer. Reach out if you'd like to learn more!</p>
      <a className={styles.contactBtn} href='mailto:qiu00038@algonquinlive.com'>Contact Me</a>
      </div>
      <img className={styles.heroImg} src={getImageUrl("hero/Me.jpeg")} alt='Hero Image'></img>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  )
}
