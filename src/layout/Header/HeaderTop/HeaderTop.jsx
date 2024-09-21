import React from 'react'
import { FaUser,FaInstagram,FaTiktok,FaRegHeart  } from "react-icons/fa";


export default function HeaderTop() {
  return (
    <div className='header-top'>
      <div className="container">
         <div className="row">
           <div className="col-lg-6">
              <div className='contact-num'>Dəstək: (077) 613-59-59</div>
           </div>
           <div className="col-lg-6">
             <ul>
                <li><a href="#"><FaRegHeart className='icon'/><span>Sevimlilər</span> </a></li>
                <li><a href="#"><FaUser className='icon'/><span>Giriş</span></a></li>
             </ul>
           </div>
         </div>
      </div>
    </div>
  )
}
