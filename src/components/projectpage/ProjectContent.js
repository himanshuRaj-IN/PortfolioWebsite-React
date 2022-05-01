import React from 'react'
import styles from './ProjectContent.module.css';
import java from './img/java.png';
export default function ProjectContent(props) {
  return (
    <div className={styles.container}>
    <h1> &#9778; {props.projectName}</h1>
    <h3>{props.summary}</h3>
    <h4>&#9737; {props.kp1}</h4>
    <h4>&#9737; {props.kp2}</h4>
    <h4>&#9737; {props.kp3}</h4>
    <div className={styles.techImg}>
        <img src={java} alt="Java" />
        <img src={java} alt="JAVA" />
        <img src={java} alt="JAVA" />
        <img src={java} alt="JAVA" />
        <img src={java} alt="JAVA" />
    </div>
    <div className={styles.btndiv}><button className={styles.btn}>Know more</button></div>
    </div>
  )
}
