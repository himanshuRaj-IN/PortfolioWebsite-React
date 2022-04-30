import React from 'react'
import styles from "./Projects.module.css";
import Project from './ProjectCard'
import data from '../data.json'
export default function projects() {
  return (
    <div className={styles.container}>
        <div>.</div>
        <div className={styles.wrapper}>
            <div className={styles.heading}><h1>PROJECTS</h1>
            <div className={styles.subheadings}>
                <a className={styles.subheading} href="/html/">ALL</a> 
                <a className={styles.subheading} href="/css/">React JS</a> 
                <a className={styles.subheading} href="/js/">Selenium</a> 
                <a className={styles.subheading} href="/python/">IoT</a>
                <a className={styles.subheading} href="/python/">Aruduino</a>
            </div></div>
            <div className={styles.seperator}></div>
            <div className={styles.projectContent}>
              <Project  titleOfProject={data.projects[1].projectName} shortSummary={data.projects[0].briefSummary}/>
            </div>
        </div>
    </div>
  )
}
