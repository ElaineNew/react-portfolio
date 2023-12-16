import React, {useState} from 'react'
import styles from "./About.module.css"
import { getImageUrl } from '../../util'

export const About = () => {
  const[show1, setShow1]=useState(false)
  const[show2, setShow2]=useState(false)
  const[show3, setShow3]=useState(false)
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          
        <li className={styles.aboutItem}>
            <img className={styles.aboutImg} src={getImageUrl("about/language.png")} onMouseEnter={()=>setShow1(true)} onMouseLeave={()=>setShow1(false)} alt='teacher'/>
            <div>
              <h3>Bilingual</h3>
              <p className={`${styles.description} ${show1 && styles.onShow}`} >I am fluent in both English and Chinese. </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.aboutImg} src={getImageUrl("about/painting.png")} onMouseEnter={()=>setShow2(true)} onMouseLeave={()=>setShow2(false)} alt='Cat person'/>
            <div>
              <h3>Painting</h3>
              <p className={`${styles.description} ${show2 && styles.onShow}`}>I love painting, especially water color. </p>

            </div>
          </li>
          <li  className={styles.aboutItem}>
            <img className={styles.aboutImg} src={getImageUrl("about/teaching.png")} onMouseEnter={()=>setShow3(true)} onMouseLeave={()=>setShow3(false)} alt='teacher'/>
            <div>
              <h3>Former Teacher</h3>
              <p className={`${styles.description} ${show3 && styles.onShow}`}>I worked as an online teacher for 4 years. </p>
            </div>
          </li>
        </ul>

      </div>
      
    </section>
  )
}
