import React from 'react'
import styles from './ProjectCard.module.css'
import javaimg from '../img/java.png'
export default function ProjectCard(props) {
  return (
    <div className={styles.container}>
        <h1>{props.titleOfProject}</h1>
        <h3>{props.shortSummary}</h3>
        <h4>{props.keyPoint1}</h4>
        <h4>{props.keyPoint2}</h4>
        <h4>{props.keyPoint3}</h4>
        <div className={styles.techImg}>
            <img src={javaimg} alt="JAVA" />
            <img src={javaimg} alt="JAVA" />
            <img src={javaimg} alt="JAVA" />
            <img src={javaimg} alt="JAVA" />
            <img src={javaimg} alt="JAVA" />
            </div>
        <div className={styles.btndiv}><button className={styles.btn}>Previous</button> <button className={styles.btn}>Next</button></div>
       

        </div>
  )
}
