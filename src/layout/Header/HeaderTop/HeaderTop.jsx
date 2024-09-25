import React from 'react'
import { FaUser ,FaRegHeart  } from "react-icons/fa";
import style from "../header.module.css"


export default function HeaderTop() {
  return (
    <div className={style.headerTop}>
      <div className="container">
         <div className={style.headerTop_container}>
           <div className={style.headerTop_container_left}>
              <div className={style.contactNum}>Dəstək: (077) 613-59-59</div>
           </div>
           <div className={style.headerTop_container_right}>
                <a href="#"><FaRegHeart className={style.headerTop_container_right_icon}/><span>Sevimlilər</span> </a>
                <a href="#"><FaUser className={style.headerTop_container_right_icon}/><span>Giriş</span></a>
           </div>
         </div>
      </div>
    </div>
  )
}
