import React from 'react'
import styles from './Aboutmain.module.css'
import data from '../../data.json'
import img from './manstanding.png'
export default function Aboutmain() {
  return (
    <div className={styles.container}>
      <div className={styles.introduction} >
        <h3>{data.bio}</h3>
        <div className={styles.btndiv}><button className={styles.btn}>G E T &nbsp; &nbsp; R E S U M E</button></div>
      </div>
      
      <div className={styles.imagePerson} style={{ backgroundImage: `url(${img})` }}>
      </div>
    </div>

  )
}
