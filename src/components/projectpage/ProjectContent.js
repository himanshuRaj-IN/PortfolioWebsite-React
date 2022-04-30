import React from 'react'
import styles from './ProjectContent.module.css';
import java from './img/java.png';
export default function ProjectContent(props) {
  return (
    <div className={styles.container}>
    <h1> &#9778; IoT Based Smart Parking </h1>
    <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni architecto quia voluptate facilis, rem eligendi eum voluptatem natus exercitationem tenetur voluptatibus, vitae assumenda perferendis minima fuga quidem sed. Perspiciatis facere doloremque obcaecati non dolorem quos optio maxime inventore placeat voluptatum ullam eaque at, laborum similique officiis alias cupiditate, quibusdam ducimus?</h3>
    <h4>&#9737; Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, laborum.</h4>
    <h4>&#9737; Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, laborum.</h4>
    <h4>&#9737; Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, laborum.</h4>
    <div className={styles.techImg}>
        <img src={java} alt="JAVA" />
        <img src={java} alt="JAVA" />
        <img src={java} alt="JAVA" />
        <img src={java} alt="JAVA" />
        <img src={java} alt="JAVA" />
    </div>
    <div className={styles.btndiv}><button className={styles.btn}>Know more</button></div>
    </div>
  )
}
