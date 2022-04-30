import React from 'react'
import SocialMedia from './SocialMedia';
import style from './Footer.module.css';
export default function Footer() {
  return (
    <div className={style.container}>
        <div className={style.copyname}>&#169; 2022 Himanshu Raj</div>
        <div className={style.socialMedia}><SocialMedia /></div>
    </div>
  )
}
