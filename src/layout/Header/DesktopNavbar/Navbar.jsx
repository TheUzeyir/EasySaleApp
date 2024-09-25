import React, { useState } from 'react';
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoSearchSharp, IoAddSharp, IoFilter } from "react-icons/io5";
import { FaCar, FaHome, FaTshirt, FaCouch } from 'react-icons/fa';
import { IoMdCloseCircle } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import HeaderFilterCard from '../headerFilterCard/HeaderFilterCard';
import style from './navbar.module.css';
import { FaBars } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

const Navbar = () => {
    const [selectedCity, setSelectedCity] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [isNawOpen, setNawOpen] = useState(false); // Single state to control navbar visibility
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isFilterCardOpen, setFilterCardOpen] = useState(false); 

    const cities = ['Bakı', 'Gəncə', 'Sumqayıt', 'Şəki', 'Lənkəran'];

    const categories = [
        { name: 'Nəqliyyat', products: ['Skuter', 'Avtomobil', 'Motosiklet'], icon: <FaCar /> },
        { name: 'Daşınmaz Əmlak', products: ['Mənzil', 'Ev', 'Ofis'], icon: <FaHome /> },
        { name: 'Dekor', products: ['Güzgü', 'Lampa', 'Divar bəzəkləri'], icon: <FaCouch /> },
        { name: 'Geyim', products: ['Köynək', 'Şalvar', 'Ayaqqabı'], icon: <FaTshirt /> }
    ];

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    const openModal = () => { 
        setModalOpen(true);
    };

    const toggleNawBar = () => { 
        setNawOpen((prev) => !prev); // Toggle the navbar
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const toggleFilterCard = () => {
        setFilterCardOpen((prev) => !prev);
    };

    return (
<>
<nav className={style.navbar}>
    <div className="container">
        <div className={style.navbar_container}>
            <p className={style.navbarBrand}>EasySaleApp</p>
            <div className={style.offcanvasBody}>
                <div className={style.categoryBox} onClick={openModal}>
                    <BiSolidCategoryAlt /> Kategoriya
                </div>
                <div className={style.inputGroup}>
                    <select value={selectedCity} onChange={handleCityChange}>
                        <option value="">--Şəhər seçin--</option>
                        {cities.map((city, index) => (
                            <option key={index} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                    <input placeholder="Əşya və ya xidmət axtarışı" type="text" className={style.searchInput} />
                    <button className={style.searchBtn}><IoSearchSharp className={style.icon} /></button>
                </div>
            </div>
            <div className={style.advertsBox}>
                <button className={style.advertsBox_btn_new}><IoAddSharp className='' /> Yeni Elan</button>
                <button className={style.advertsBox_btn_filter} onClick={toggleFilterCard}><IoFilter className='' /> Filter</button>
            </div>
            <FaBars className={style.bar_icon} onClick={toggleNawBar} /> {/* Toggles Navbar */}
        </div>
    </div>
</nav>

{/* Toggle the visibility of the responsive navbar based on isNawOpen */}
<div className={`${style.nawBar_responsive_container} ${isNawOpen ? style.nawBar_responsive_displayBlock : style.nawBar_responsive_hide}`}>
    <div className={style.nawBar_responsive}>
        <div className={style.nawBar_responsive_header}>
            <span>EasySaleApp</span>
            <IoMdCloseCircle className={style.nawBar_responsive_header_icon} onClick={toggleNawBar} /> {/* Close Navbar */}
        </div>
        <div className={style.nawBar_responsive_main}>
            <div className={style.nawBar_responsive_main_box}><IoMdPerson /> Giris</div>
            <div className={style.nawBar_responsive_main_box}><FaHeart /> Beyendiklerim</div>
            <div className={style.nawBar_responsive_main_box}><FaCartShopping /> Paketler</div>
        </div>
    </div>
</div>

    {isFilterCardOpen && <HeaderFilterCard isFilterCardOpen={isFilterCardOpen} />}
    {isModalOpen && (
        <div className="modal category-modal">
            <div className="modal-content">
                <button onClick={closeModal}>X</button>
                <div className="modal-body d-flex">
                    <div className="categories">
                        <div className="categories">
                            {categories.map((category, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setSelectedCategory(category)}
                                    className="category-item"
                                >
                                    <span className="category-icon">{category.icon}</span>
                                    {category.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="products">
                        {selectedCategory ? (
                            <ul>
                                {selectedCategory.products.map((product, index) => (
                                    <li key={index}>{product}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>Məhsulları görmək üçün kateqoriya seçin</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )}
</>
    );
};

export default Navbar;