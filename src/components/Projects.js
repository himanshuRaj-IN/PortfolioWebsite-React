import React from 'react'
import styles from "./Projects.module.css";
import Projectheading from './projectpage/Projectheading';
import ProjectContent from './projectpage/ProjectContent';
import data from '../data.json'
export default function projects() { 
  return ( 
        <div className={styles.container}>
          <Projectheading/>
          <ProjectContent />     
          <ProjectContent />     
          <ProjectContent />     
          <ProjectContent />     
          <ProjectContent />     
        </div>
  )
}
