import React, { useState } from 'react'
import Footer from '../../layout/footer/Footer'
import Header from '../../layout/Header/Header'
import { FaPhoneAlt } from "react-icons/fa";
import { MdDiamond } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import style from "./detailPage.module.css"
import img from "../../img/download.jpeg"

const DetailPage = () => {

    const[openComplaintBox,setOpenComplaintBox]=useState(false)

    const openComplainCard=()=>{
        setOpenComplaintBox(prev => !prev)
    }

  return (
    <div>
      <Header/>
      <div className="container">
      <p className={style.detailPage_goBack} onClick={()=>navigate(-1)}><MdOutlineKeyboardArrowLeft/>Go Back</p>
        <div className={style.detailPage_main}>
            <div className={style.detailPage_main_head}>
                <div className={style.detailPage_main_head_left}>
                    <div className={style.detailPage_main_head_left_mainImgBox}>
                        <img src={img} alt="" className={style.detailPage_main_head_left_mainImgBox_img}/>
                    </div>
                    <div className={style.detailPage_main_head_left_slideImgBox}>
                        <img className={style.detailPage_main_head_left_slideImgBox_img} src={img} alt="" />
                        <img className={style.detailPage_main_head_left_slideImgBox_img} src={img} alt="" />
                        <img className={style.detailPage_main_head_left_slideImgBox_img} src={img} alt="" />
                        <img className={style.detailPage_main_head_left_slideImgBox_img} src={img} alt="" />
                    </div>
                </div>
                <div className={style.detailPage_main_head_right}>
                    <h4 className={style.detailPage_main_head_right_humanName}>Sahib Kalandarov</h4>
                    <p className={style.detailPage_main_head_right_emptyBox}></p>
                    <p className={style.detailPage_main_head_right_phone}><FaPhoneAlt className={style.detailPage_main_head_right_phone_icon}/> 0504002200</p>
                    <p className={style.detailPage_main_head_right_emptyBox}></p>
                    <button className={style.detailPage_main_head_right_btn}><MdDiamond/>Elanı VIP et</button>
                    <p className={style.detailPage_main_head_right_otherSale}>Satıcının bütün elanlarını gör</p>
                </div>
            </div>
            <div className={style.detailPage_main_bottom}>
                <div className={style.detailPage_main_bottom_left}>
                    <div className={style.detailPage_main_bottom_left_box}><span>Qiymət:</span> <span>300</span></div>
                    <div className={style.detailPage_main_bottom_left_box}><span>Şəhər:</span> <span>Bakı</span></div>
                    <div className={style.detailPage_main_bottom_left_box}><span>Marka:</span> <span>LAND ROVER</span></div>
                    <div className={style.detailPage_main_bottom_left_box}><span>Model:</span> <span>RANGE ROVER</span></div>
                    <div className={style.detailPage_main_bottom_left_box}><span>Sürətlər qutusu :</span> <span>Avtomat</span></div>
                    <div className={style.detailPage_main_bottom_left_box}><span>Ötürücü:</span> <span>Arxa</span></div>
                    <div className={style.detailPage_main_bottom_left_box}><span>Yanacaq növü :</span> <span>Dizel</span></div>
                    <div className={style.detailPage_main_bottom_left_box}><span>Mühərik:</span> <span>3</span></div>
                    <div className={style.detailPage_main_bottom_left_box}><span>İl:</span> <span>2017</span></div>
                    <div className={style.detailPage_main_bottom_left_box}><span>Ban növü:</span> <span>Offroader</span></div>
                    <div className={style.detailPage_main_bottom_left_box}><span>Rəng:</span> <span>Gümüşü</span></div>
                </div>
                <div className={style.detailPage_main_bottom_right}>
                    <p>Elanın nömrəsi: 2221</p>
                    <p>Günlük icarəyə verilir.</p>
                    <div className={style.detailPage_main_bottom_right_card}>
                        <p className={style.detailPage_main_bottom_right_card_title}><FaHeart className={style.detailPage_main_bottom_right_card_title_icon}/>Bəyənilənlərə əlavə et</p>
                        <p className={style.detailPage_main_bottom_right_card_subtitle} onClick={openComplainCard}><FaFlag className={style.detailPage_main_bottom_right_card_subtitle_icon}/> Şikayət et</p>
                        <div className={`${style.detailPage_main_bottom_right_card_complaintBox_container} ${openComplaintBox ? style.detailPage_main_bottom_right_card_complaintBox_container_disBlock : ""}`}>
                            <div className={style.detailPage_main_bottom_right_card_complaintBox}>
                                <textarea name="" id=""></textarea>
                                <button className={style.detailPage_main_bottom_right_card_complaintBox_btn}>Gonder</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default DetailPage
