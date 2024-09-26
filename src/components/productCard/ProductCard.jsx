import React from 'react'
import style from "./productCard.module.css"
import { FaHeart } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { IoCalendarNumber } from "react-icons/io5";
import data from "../../data.json"
import { Link } from 'react-router-dom';

const ProductCard = () => { 
  return (
    <div className="container">
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
  )
} 

export default ProductCard
