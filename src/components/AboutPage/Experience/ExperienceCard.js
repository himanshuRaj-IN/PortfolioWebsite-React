import React from 'react'
import styles from './ExperienceCard.module.css'
import ExperienceItem from './ExperienceItem'
export default function ExperienceCard() {
  return (
    <div className={styles.experianceCard}>
        <div className={styles.experienceHeading}> <h1>Experiances</h1></div>
        <ExperienceItem position="QEA Intern " orgName="Cognizant Technology Solutions India Pvt Ltd." orgInfo="Gurugram, INDIA" fromDate="Jan,2022" toDate="Present"  extendedInfo1="Thsi si enten info tho the heheehehehe" extendedInfo2="Thsi si enten info tho the heheehehehe" extendedInfo3="Thsi si enten info tho the heheehehehe" extendedInfo4="Thsi si enten info tho the heheehehehe" extendedInfo5="Thsi si enten info tho the heheehehehe" />
        <ExperienceItem position="Summer intern - Internet of Things" orgName="Sant Longowal Institute of Engg. and Technology" orgInfo="Longowal, INDIA" fromDate="Jul,2021" toDate="Aug,2021"/>
        <ExperienceItem position="Implant Trainee (Grid-Operations)" orgName="Bihar State Power Transmission Company Ltd." orgInfo="Patna, INDIA" fromDate="Jul,2018" toDate="Aug,2018"/>
        <ExperienceItem position="intern" orgName="Cognizant Technological Solutions" orgInfo="chennai INDIA" fromDate="Jan,2022" toDate="Jan,2025"/>
        <ExperienceItem position="intern" orgName="Cognizant Technological Solutions" orgInfo="chennai INDIA" fromDate="Jan,2022" toDate="Jan,2025"/>
        <ExperienceItem position="intern" orgName="Cognizant Technological Solutions" orgInfo="chennai INDIA" fromDate="Jan,2022" toDate="Jan,2025"/>
        <ExperienceItem position="intern" orgName="Cognizant Technological Solutions" orgInfo="chennai INDIA" fromDate="Jan,2022" toDate="Jan,2025"/>
    </div>

  )
}
