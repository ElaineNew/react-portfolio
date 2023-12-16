import React from 'react'
import styles from "./ProjectCard.module.css"
import { getImageUrl } from '../../util'

export const ProjectCard = ({project:{title, image, description, technologies, live, github}}) => {
  return (
      <div className={styles.container}>
        <img className={styles.image} src={getImageUrl(image)} alt="image of project"></img>
        <h3 className={styles.title}>{title}</h3>
        <h3 className={styles.description}>{description}</h3>
        <p className={styles.skills}>{technologies}</p>
        <div className={styles.links}>
          <a href={live} className={styles.link}>Live</a>
          <a href={github} className={styles.link}>GitHub</a>
        </div>
      </div>
    
  )
}
