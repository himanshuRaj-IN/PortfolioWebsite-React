import React from 'react';
import styles from './Projectheading.module.css'
export default function Projectheading() {
  return (
      <div className={styles.container}>
        <div className={styles.heading}><h1>PROJECTS</h1>
          <div className={styles.subheadings}>
            <a className={styles.subheading} href="/">ALL</a>
            <a className={styles.subheading} href="/">React JS</a>
            <a className={styles.subheading} href="/">Selenium</a>
            <a className={styles.subheading} href="/">IoT</a>
            <a className={styles.subheading} href="/">Aruduino</a>
          </div></div>
          <div className={styles.seperator}></div>  
      </div>
  )
}
