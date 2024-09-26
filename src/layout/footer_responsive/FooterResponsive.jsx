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
                    <div className={style.FooterResponsive_card} onClick={()=>navigate('/')}><FaHome/>Ana Sehife</div>
                    <div className={style.FooterResponsive_card} onClick={()=>navigate('/CategoryBox')}><BiSolidCategory/>Kateqoriyalar</div>
                    <div className={style.FooterResponsive_card} onClick={()=>navigate('/likedPage')}><FaHeart/>Beyendiklerim</div>
                    <div className={style.FooterResponsive_card} onClick={()=>navigate('/logIn')}><IoMdPerson/>Giris</div>
                </div>
            </div>
        </div>
        {showCategories && <CategoryBox />}
    </div>
  )
}

export default FooterResponsive
