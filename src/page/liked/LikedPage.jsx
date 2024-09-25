import React from 'react'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/footer/Footer'
import style from "./likedPage.module.css"
import { FaHeart } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { IoCalendarNumber } from "react-icons/io5";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const LikedPage = () => {

    const navigate=useNavigate()

  return ( 
    <div className="">        
        <div className={style.likedPage}>
        <Header/>
        <div className="container">
        <p className={style.productCard_goBack} onClick={()=>navigate(-1)}><MdOutlineKeyboardArrowLeft/>Go Back</p>
            <div className={style.productCard_container}>
            <div className={style.productCard}>
                <div className={style.productCard_imgBox}>
                    <img src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="" className={style.productCard_imgBox_img}/>
                    <FaHeart className={style.productCard_imgBox_heartIcon}/>
                    <div className={style.productCard_imgBox_title}><BsShop/> Magaza</div>
                </div>
                <div className={style.productCard_title}>
                    <span className={style.productCard_title_pirce}>200 AZN</span>
                    <div className={style.productCard_title_dayBox}><IoCalendarNumber/>1Gun</div>
                </div>
                <p className={style.productCard_subTitle}>Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi corrupti dicta cupiditate fugit neque explicabo rem ducimus molestiae ipsa deserunt, reiciendis, quam maiores deleniti mollitia eligendi vero voluptates quae!</p>
                <p className={style.productCard_text}>Baki</p>
            </div>
            <div className={style.productCard}>
                <div className={style.productCard_imgBox}>
                    <img src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="" className={style.productCard_imgBox_img}/>
                    <FaHeart className={style.productCard_imgBox_heartIcon}/>
                    <div className={style.productCard_imgBox_title}><BsShop/> Magaza</div>
                </div>
                <div className={style.productCard_title}>
                    <span className={style.productCard_title_pirce}>200 AZN</span>
                    <div className={style.productCard_title_dayBox}><IoCalendarNumber/>1Gun</div>
                </div>
                <p className={style.productCard_subTitle}>Lorem ipsum dolor sit amet.</p>
                <p className={style.productCard_text}>Baki</p>
            </div>
            <div className={style.productCard}>
                <div className={style.productCard_imgBox}>
                    <img src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="" className={style.productCard_imgBox_img}/>
                    <FaHeart className={style.productCard_imgBox_heartIcon}/>
                    <div className={style.productCard_imgBox_title}><BsShop/> Magaza</div>
                </div>
                <div className={style.productCard_title}>
                    <span className={style.productCard_title_pirce}>200 AZN</span>
                    <div className={style.productCard_title_dayBox}><IoCalendarNumber/>1Gun</div>
                </div>
                <p className={style.productCard_subTitle}>Lorem ipsum dolor sit amet.</p>
                <p className={style.productCard_text}>Baki</p>
            </div>
            <div className={style.productCard}>
                <div className={style.productCard_imgBox}>
                    <img src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="" className={style.productCard_imgBox_img}/>
                    <FaHeart className={style.productCard_imgBox_heartIcon}/>
                    <div className={style.productCard_imgBox_title}><BsShop/> Magaza</div>
                </div>
                <div className={style.productCard_title}>
                    <span className={style.productCard_title_pirce}>200 AZN</span>
                    <div className={style.productCard_title_dayBox}><IoCalendarNumber/>1Gun</div>
                </div>
                <p className={style.productCard_subTitle}>Lorem ipsum dolor sit amet.</p>
                <p className={style.productCard_text}>Baki</p>
            </div>
            <div className={style.productCard}>
                <div className={style.productCard_imgBox}>
                    <img src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="" className={style.productCard_imgBox_img}/>
                    <FaHeart className={style.productCard_imgBox_heartIcon}/>
                    <div className={style.productCard_imgBox_title}><BsShop/> Magaza</div>
                </div>
                <div className={style.productCard_title}>
                    <span className={style.productCard_title_pirce}>200 AZN</span>
                    <div className={style.productCard_title_dayBox}><IoCalendarNumber/>1Gun</div>
                </div>
                <p className={style.productCard_subTitle}>Lorem ipsum dolor sit amet.</p>
                <p className={style.productCard_text}>Baki</p>
            </div>
            <div className={style.productCard}>
                <div className={style.productCard_imgBox}>
                    <img src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="" className={style.productCard_imgBox_img}/>
                    <FaHeart className={style.productCard_imgBox_heartIcon}/>
                    <div className={style.productCard_imgBox_title}><BsShop/> Magaza</div>
                </div>
                <div className={style.productCard_title}>
                    <span className={style.productCard_title_pirce}>200 AZN</span>
                    <div className={style.productCard_title_dayBox}><IoCalendarNumber/>1Gun</div>
                </div>
                <p className={style.productCard_subTitle}>Lorem ipsum dolor sit amet.</p>
                <p className={style.productCard_text}>Baki</p>
            </div>
            <div className={style.productCard}>
                <div className={style.productCard_imgBox}>
                    <img src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="" className={style.productCard_imgBox_img}/>
                    <FaHeart className={style.productCard_imgBox_heartIcon}/>
                    <div className={style.productCard_imgBox_title}><BsShop/> Magaza</div>
                </div>
                <div className={style.productCard_title}>
                    <span className={style.productCard_title_pirce}>200 AZN</span>
                    <div className={style.productCard_title_dayBox}><IoCalendarNumber/>1Gun</div>
                </div>
                <p className={style.productCard_subTitle}>Lorem ipsum dolor sit amet.</p>
                <p className={style.productCard_text}>Baki</p>
            </div>
            <div className={style.productCard}>
                <div className={style.productCard_imgBox}>
                    <img src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="" className={style.productCard_imgBox_img}/>
                    <FaHeart className={style.productCard_imgBox_heartIcon}/>
                    <div className={style.productCard_imgBox_title}><BsShop/> Magaza</div>
                </div>
                <div className={style.productCard_title}>
                    <span className={style.productCard_title_pirce}>200 AZN</span>
                    <div className={style.productCard_title_dayBox}><IoCalendarNumber/>1Gun</div>
                </div>
                <p className={style.productCard_subTitle}>Lorem ipsum dolor sit amet.</p>
                <p className={style.productCard_text}>Baki</p>
            </div>
            <div className={style.productCard}>
                <div className={style.productCard_imgBox}>
                    <img src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="" className={style.productCard_imgBox_img}/>
                    <FaHeart className={style.productCard_imgBox_heartIcon}/>
                    <div className={style.productCard_imgBox_title}><BsShop/> Magaza</div>
                </div>
                <div className={style.productCard_title}>
                    <span className={style.productCard_title_pirce}>200 AZN</span>
                    <div className={style.productCard_title_dayBox}><IoCalendarNumber/>1Gun</div>
                </div>
                <p className={style.productCard_subTitle}>Lorem ipsum dolor sit amet.</p>
                <p className={style.productCard_text}>Baki</p>
            </div>
            <div className={style.productCard}>
                <div className={style.productCard_imgBox}>
                    <img src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="" className={style.productCard_imgBox_img}/>
                    <FaHeart className={style.productCard_imgBox_heartIcon}/>
                    <div className={style.productCard_imgBox_title}><BsShop/> Magaza</div>
                </div>
                <div className={style.productCard_title}>
                    <span className={style.productCard_title_pirce}>200 AZN</span>
                    <div className={style.productCard_title_dayBox}><IoCalendarNumber/>1Gun</div>
                </div>
                <p className={style.productCard_subTitle}>Lorem ipsum dolor sit amet.</p>
                <p className={style.productCard_text}>Baki</p>
            </div>
            <div className={style.productCard}>
                <div className={style.productCard_imgBox}>
                    <img src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="" className={style.productCard_imgBox_img}/>
                    <FaHeart className={style.productCard_imgBox_heartIcon}/>
                    <div className={style.productCard_imgBox_title}><BsShop/> Magaza</div>
                </div>
                <div className={style.productCard_title}>
                    <span className={style.productCard_title_pirce}>200 AZN</span>
                    <div className={style.productCard_title_dayBox}><IoCalendarNumber/>1Gun</div>
                </div>
                <p className={style.productCard_subTitle}>Lorem ipsum dolor sit amet.</p>
                <p className={style.productCard_text}>Baki</p>
            </div>
            <div className={style.productCard}>
                <div className={style.productCard_imgBox}>
                    <img src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="" className={style.productCard_imgBox_img}/>
                    <FaHeart className={style.productCard_imgBox_heartIcon}/>
                    <div className={style.productCard_imgBox_title}><BsShop/> Magaza</div>
                </div>
                <div className={style.productCard_title}>
                    <span className={style.productCard_title_pirce}>200 AZN</span>
                    <div className={style.productCard_title_dayBox}><IoCalendarNumber/>1Gun</div>
                </div>
                <p className={style.productCard_subTitle}>Lorem ipsum dolor sit amet.</p>
                <p className={style.productCard_text}>Baki</p>
            </div>
            <div className={style.productCard}>
                <div className={style.productCard_imgBox}>
                    <img src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="" className={style.productCard_imgBox_img}/>
                    <FaHeart className={style.productCard_imgBox_heartIcon}/>
                    <div className={style.productCard_imgBox_title}><BsShop/> Magaza</div>
                </div>
                <div className={style.productCard_title}>
                    <span className={style.productCard_title_pirce}>200 AZN</span>
                    <div className={style.productCard_title_dayBox}><IoCalendarNumber/>1Gun</div>
                </div>
                <p className={style.productCard_subTitle}>Lorem ipsum dolor sit amet.</p>
                <p className={style.productCard_text}>Baki</p>
            </div>
            <div className={style.productCard}>
                <div className={style.productCard_imgBox}>
                    <img src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="" className={style.productCard_imgBox_img}/>
                    <FaHeart className={style.productCard_imgBox_heartIcon}/>
                    <div className={style.productCard_imgBox_title}><BsShop/> Magaza</div>
                </div>
                <div className={style.productCard_title}>
                    <span className={style.productCard_title_pirce}>200 AZN</span>
                    <div className={style.productCard_title_dayBox}><IoCalendarNumber/>1Gun</div>
                </div>
                <p className={style.productCard_subTitle}>Lorem ipsum dolor sit amet.</p>
                <p className={style.productCard_text}>Baki</p>
            </div>
            <div className={style.productCard}>
                <div className={style.productCard_imgBox}>
                    <img src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="" className={style.productCard_imgBox_img}/>
                    <FaHeart className={style.productCard_imgBox_heartIcon}/>
                    <div className={style.productCard_imgBox_title}><BsShop/> Magaza</div>
                </div>
                <div className={style.productCard_title}>
                    <span className={style.productCard_title_pirce}>200 AZN</span>
                    <div className={style.productCard_title_dayBox}><IoCalendarNumber/>1Gun</div>
                </div>
                <p className={style.productCard_subTitle}>Lorem ipsum dolor sit amet.</p>
                <p className={style.productCard_text}>Baki</p>
            </div>
            <div className={style.productCard}>
                <div className={style.productCard_imgBox}>
                    <img src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="" className={style.productCard_imgBox_img}/>
                    <FaHeart className={style.productCard_imgBox_heartIcon}/>
                    <div className={style.productCard_imgBox_title}><BsShop/> Magaza</div>
                </div>
                <div className={style.productCard_title}>
                    <span className={style.productCard_title_pirce}>200 AZN</span>
                    <div className={style.productCard_title_dayBox}><IoCalendarNumber/>1Gun</div>
                </div>
                <p className={style.productCard_subTitle}>Lorem ipsum dolor sit amet.</p>
                <p className={style.productCard_text}>Baki</p>
            </div>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default LikedPage
