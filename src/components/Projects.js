import React from 'react'
import styles from "./Projects.module.css";
import Projectheading from './projectpage/Projectheading';
import ProjectContent from './projectpage/ProjectContent';
import data from '../data.json'
export default function projects() {
  return (
    <div className={styles.container}>
      <Projectheading />
      <ProjectContent projectName={data.projects[0].projectName} summary={data.projects[0].briefSummary} kp1={data.projects[0].keyPoint1} kp2={data.projects[0].keyPoint2} kp3={data.projects[0].keyPoint3} tech = {data.projects[0].utilized} />
      <ProjectContent projectName={data.projects[1].projectName} summary={data.projects[1].briefSummary} kp1={data.projects[1].keyPoint1} kp2={data.projects[1].keyPoint2} kp3={data.projects[1].keyPoint3} tech = {data.projects[1].utilized} />
      <ProjectContent projectName={data.projects[2].projectName} summary={data.projects[2].briefSummary} kp1={data.projects[2].keyPoint1} kp2={data.projects[2].keyPoint2} kp3={data.projects[2].keyPoint3} tech = {data.projects[2].utilized} />
      {/* <ProjectContent projectName={data.projects[3].projectName} summary={data.projects[3].briefSummary} kp1={data.projects[3].keyPoint1} kp2={data.projects[3].keyPoint2} kp3={data.projects[3].keyPoint3} tech = {data.projects[3].utilized} /> */}
      {/* <ProjectContent projectName={data.projects[4].projectName} summary={data.projects[0].briefSummary} kp1={data.projects[0].keyPoint1} kp2={data.projects[0].keyPoint2} kp3={data.projects[0].keyPoint3} tech = {data.projects[0].utilized} /> */}
      {/* <ProjectContent projectName={data.projects[5].projectName} summary={data.projects[0].briefSummary} kp1={data.projects[0].keyPoint1} kp2={data.projects[0].keyPoint2} kp3={data.projects[0].keyPoint3} tech = {data.projects[0].utilized} /> */}
      
    </div>
  )
}
