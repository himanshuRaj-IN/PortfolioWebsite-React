import React from 'react'
import { useState ,useEffect} from 'react'
import styles from './Home.module.css'
import data from '../data.json'
import person from '../personimge.png'

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalDelayMilliseconds = 2000;
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        // reset index if current index is greater than array size
        return prevIndex + 1 < data.profTitles.length ? prevIndex + 1 : 0;
      });
    }, intervalDelayMilliseconds);

    return () => clearInterval(interval);
  });

  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <div className={styles.greeting}>Hi I'm</div>
        <div className={styles.name}>{data.firstName.toUpperCase()} {data.lastName.toUpperCase()}</div>
        <div className={styles.profession}>{data.profTitles[index]}</div>   
        <div>
          <button className={styles.btn}>Know More</button>
          <button className={styles.btn}>Connect Me</button>
        </div>
      </div>
      <div className={styles.imagediv} style={{backgroundImage: `url(${person})`}}></div>
    </div>
  )
}
