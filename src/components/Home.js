import React from 'react'
import styles from './Home.module.css'
import data from '../data.json'
import person from '../personimge.png'
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <div className={styles.greeting}>Hi I'm</div>
        <div className={styles.name}>{data.firstName.toUpperCase()} {data.lastName.toUpperCase()}</div>
        <div className={styles.profession}>{data.profTitles[0]}</div>   
        <div>
          <button className={styles.btn}>Know More</button>
          <button className={styles.btn}>Connect Me</button>
        </div>
      </div>
      <div className={styles.imagediv} style={{backgroundImage: `url(${person})`}}></div>
    </div>
  )
}
