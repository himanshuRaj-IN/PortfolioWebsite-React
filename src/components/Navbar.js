import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import data from '../data.json'
export default function Navbar() {
    const temp = data.firstName.toUpperCase();
    const [heading, setheading] = useState(temp);
    return (
        <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.fullname} >{heading}</div>
            <nav>
                <Link to="/Home">HOME</Link> 
                <Link to="/Projects">PROJCTS</Link>  
                <Link to="/About">ABOUT</Link>
                <Link to="/Blog">BLOG</Link>           
                <Link to="/Contact">CONTACT</Link>
            </nav>
            <button className={styles.hamburgerIcon}>=</button>
        </div></div>
    )
}
