import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import style from "./aboutPage.module.css"
import { IoMail } from "react-icons/io5";

const Contack = () => {
  return (
    <div className='container'>
      <h3 className={style.contack_title}>BİZİMLƏ ƏLAQƏ</h3>
      <h4 className={style.contack_subtitle}>Dəstək:</h4>
      <p className={style.contack_text}><FaPhoneAlt className={style.contack_icon}/> +994 77 613 59 59</p>
      <p className={style.contack_text}><FaPhoneAlt className={style.contack_icon}/> +994 70 613 59 59</p>
      <p className={style.contack_lineBox}></p>
      <p className={style.contack_subtitle}>Elektron-poçt:</p>
      <p className={style.contack_text}><IoMail className={style.contack_icon}/> Info@rentermmc.com</p>
    </div>
  )
}

export default Contack
