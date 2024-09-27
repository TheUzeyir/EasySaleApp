import React from 'react'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/footer/Footer'
import style from "./likedPage.module.css"
import { FaHeart } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { IoCalendarNumber } from "react-icons/io5";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import FooterResponsive from '../../layout/footer_responsive/FooterResponsive';
import data from "../../data.json"
import { Link } from 'react-router-dom';

const LikedPage = () => {

    const navigate=useNavigate()

  return ( 
    <div className="">        
        <div className={style.likedPage}>
        <Header/>
        <div className="container">
        <p className={style.productCard_goBack} onClick={()=>navigate(-1)}><MdOutlineKeyboardArrowLeft/>Go Back</p>
        <div className={style.productCard_container}>
            {
                data.map((item)=>                 
                <div className={style.productCard} key={item.id}>
                    <Link to={`/product-details/${item.id}`} >                    
                        <div className={style.productCard_imgBox}>
                            <img src={item.thumbnail} alt="" className={style.productCard_imgBox_img}/>
                            <FaHeart className={style.productCard_imgBox_heartIcon}/>
                            <div className={style.productCard_imgBox_title}><BsShop/> Magaza</div>
                        </div>
                        <div className={style.productCard_title}>
                            <span className={style.productCard_title_pirce}>{item.price} AZN</span>
                            <div className={style.productCard_title_dayBox}><IoCalendarNumber/>1Gun</div>
                        </div>
                        <p className={style.productCard_subTitle}>{item.title}</p>
                        <p className={style.productCard_text}>Baki</p>
                    </Link>
                </div>
                )
            }
        </div>
        </div>
        </div>
        <Footer/> 
        <FooterResponsive/>
    </div>
  )
}

export default LikedPage
