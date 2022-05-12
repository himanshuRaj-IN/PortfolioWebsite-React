import React from 'react'
import { useState } from 'react'
import style from './ContactForm.module.css'

export default function contactForm() {

    // const [textMessage,setTextMessage]  = useState('');

    // const setTextAreavalue =()=>{
    //     setTextMessage("hfsdkhfsddhfksdhfkjhsddjkhf");
    // }
    return (
        <div className={style.container}>
            <h1> Say Hi !</h1>
            <form>
                <div className={style.inputboxLine1}>
                    <label>
                        <input type="text" name="name" placeholder=' Your Name ....' />
                    </label>
                    <label>
                        <input type="text" name="email" placeholder=' example@email.com' />
                    </label>
                </div>
                <div className={style.inputboxLine2}>
                    <label>
                        <input type="text" name="subject" placeholder=' Regarding xyz...' />
                    </label>
                </div>
                <div className={style.inputboxLine2}>
                    <label>
                        <textarea value="this si " onChange="hjkhjkjjj" />
                    </label>
                </div>
                <div className={style.inputboxLine2}>
                    <input className={style.inputbox}  value="Submit" type="submit"/>
                </div>
            </form>
        </div>
    )
}
