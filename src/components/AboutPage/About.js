import React from 'react'
import Aboutmain from './Aboutmain'
import styles from './About.module.css'
import ExperienceCard from './Experience/ExperienceCard'
export default function About() {
  return (
    <div className={styles.container}>   
        <h1>About</h1>
        <Aboutmain /> 
        <ExperienceCard />     
        
    </div>
  )
}
