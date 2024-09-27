import Reac,{useState} from 'react'
import { FaHome } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { FaCirclePlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import style from "./footerResponsive.module.css"
import { useNavigate } from 'react-router-dom';
import CategoryBox from '../../components/categoryBox/CategoryBox';


const FooterResponsive = () => {
    const navigate=useNavigate()
    const [showCategories, setShowCategories] = useState(false);

    const handleCategoryClick = () => {
        setShowCategories(prev => !prev); 
    };

  return (
    <div className={style.FooterResponsive_container}>
        <div className="container">
            <div className={style.FooterResponsive}>
                <div className={style.FooterResponsive_card_addProduct}><FaCirclePlus/></div>
                <div className={style.FooterResponsive_box}>
                    <div className={style.FooterResponsive_card} onClick={()=>navigate('/')}><FaHome/><span  className={style.FooterResponsive_card_text}>Ana Sehife</span></div>
                    <div className={style.FooterResponsive_card} onClick={()=>navigate('/CategoryBox')}><BiSolidCategory/><span className={style.FooterResponsive_card_text}>Kateqoriyalar</span></div>
                    <div className={style.FooterResponsive_card} onClick={()=>navigate('/likedPage')}><FaHeart/><span className={style.FooterResponsive_card_text}>Beyendiklerim</span></div>
                    <div className={style.FooterResponsive_card} onClick={()=>navigate('/logIn')}><IoMdPerson/><span className={style.FooterResponsive_card_text}>Giris</span></div>
                </div>
            </div>
        </div>
        {showCategories && <CategoryBox />}
    </div>
  )
}

export default FooterResponsive
