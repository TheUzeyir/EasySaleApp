import React from 'react'
import { FaUser ,FaRegHeart  } from "react-icons/fa";
import style from "../header.module.css"
import { useNavigate } from 'react-router-dom';


export default function HeaderTop() {
  const navigate=useNavigate()
  return (
    <div className={style.headerTop}>
      <div className="container">
         <div className={style.headerTop_container}>
           <div className={style.headerTop_container_left}>
              <div className={style.contactNum}>Dəstək: (077) 613-59-59</div>
           </div>
           <div className={style.headerTop_container_right}>
                <a className={style.headerTop_container_right_item} onClick={()=>navigate("/likedPage")}><FaRegHeart className={style.headerTop_container_right_icon}/><span>Sevimlilər</span> </a>
                <a className={style.headerTop_container_right_item} onClick={()=>navigate("/logIn")}><FaUser className={style.headerTop_container_right_icon}/><span>Giriş</span></a>
           </div>
         </div>
      </div>
    </div>
  )
}
