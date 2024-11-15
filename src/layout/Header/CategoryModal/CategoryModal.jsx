import React,{useState} from 'react'
import style from './categoryModal.module.css';
import { IoIosArrowForward } from "react-icons/io";
import { FaCar, FaHome, FaTshirt, FaCouch } from 'react-icons/fa';



const CategoryModal = ({closeModal}) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const categories = [
        { name: 'Nəqliyyat', products: ['Skuter', 'Avtomobil', 'Motosiklet'], icon: <FaCar /> },
        { name: 'Daşınmaz Əmlak', products: ['Mənzil', 'Ev', 'Ofis'], icon: <FaHome /> },
        { name: 'Dekor', products: ['Güzgü', 'Lampa', 'Divar bəzəkləri'], icon: <FaCouch /> },
        { name: 'Geyim', products: ['Köynək', 'Şalvar', 'Ayaqqabı'], icon: <FaTshirt /> }
    ];

  return (
    <div className={style.modalCategoryModal}>
    <div className={style.modalContent}>
        <button onClick={closeModal} className={style.modalContent_btn}>X</button>
        <div className={style.modalBody}>
            <div className={style.categories}>
                {categories.map((category, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setSelectedCategory(category)}
                        className={style.categoryItem}
                    >
                        <span className={style.categoryIcon}>{category.icon}</span>
                        {category.name}
                    </div>
                ))}
            </div>
            <div className={style.products}>
                {selectedCategory ? (
                    <ul className={style.products_ul}>
                        {selectedCategory.products.map((product, index) => (
                            <li className={style.products_li} key={index}>{product} <IoIosArrowForward/></li>
                        ))}
                    </ul>
                ) : (
                    <p>Məhsulları görmək üçün kateqoriya seçin</p>
                )}
            </div>
        </div>
    </div>
</div>
  )
}

export default CategoryModal
