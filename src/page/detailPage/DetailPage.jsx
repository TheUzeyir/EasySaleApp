import React from 'react'
import Footer from '../../layout/footer/Footer'
import Header from '../../layout/Header/Header'
import { FaPhoneAlt } from "react-icons/fa";
import { MdDiamond } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import style from "./detailPage.module.css"
import img from "../../img/download.jpeg"

const DetailPage = () => {
  return (
    <div>
      <Header/>
      <div className="container">
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
                <div className={style.detailPage_main_bottom_top}>
                    <span className={style.detailPage_main_bottom_top_price}>300 AZN                    </span>
                    <span className={style.detailPage_main_bottom_top_title}>Range rover günlük</span>
                    <span className={style.detailPage_main_bottom_top_subtitle}>Elanın nömrəsi: 2221</span>
                </div>
                <div className={style.detailPage_main_bottom_foot}>
                    <div className={style.detailPage_main_bottom_foot_left}>
                        <p><span>Qiymət:</span> <span>300</span></p>
                        <p><span>Şəhər:</span> <span>Bakı</span></p>
                        <p><span>Marka:</span> <span>LAND ROVER</span></p>
                        <p><span>Model:</span> <span>RANGE ROVER</span></p>
                        <p><span>Sürətlər qutusu :</span> <span>Avtomat</span></p>
                        <p><span>Ötürücü:</span> <span>Arxa</span></p>
                        <p><span>Yanacaq növü :</span> <span>Dizel</span></p>
                        <p><span>Mühərik:</span> <span>3</span></p>
                        <p><span>İl:</span> <span>2017</span></p>
                        <p><span>Ban növü:</span> <span>Offroader</span></p>
                        <p><span>Rəng:</span> <span>Gümüşü</span></p>
                    </div>
                    <div className={style.detailPage_main_bottom_foot_right}>
                        <p>Günlük icarəyə verilir.</p>
                        <div className={style.detailPage_main_bottom_foot_right_card}>
                            <p><FaHeart/>Bəyənilənlərə əlavə et</p>
                            <p><FaFlag/> Şikayət et</p>
                            <div className={style.detailPage_main_bottom_foot_right_card_complaintBox}>
                                <textarea name="" id=""></textarea>
                                <button>Gonder</button>
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
