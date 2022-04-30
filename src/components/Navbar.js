import React from 'react'
import styles from './Navbar.module.css'
import data from '../data.json'
export default function Navbar() {
    return (
        <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.fullname}  >{data.firstName.toUpperCase()}</div>
            <nav>
                <a href="/html/">HOME</a> 
                <a href="/css/">PROJCTS</a>  
                <a href="/python/">EXPERIENCES</a>
                <a href="/js/">BLOG</a>           
                <a href="/python/">CONTACT</a>
            </nav>
            <button className={styles.hamburgerIcon}>=</button>
        </div></div>
    )
}
