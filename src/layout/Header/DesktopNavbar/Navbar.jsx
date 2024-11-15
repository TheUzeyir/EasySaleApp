import React, { useState,useEffect } from 'react';
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoSearchSharp, IoAddSharp, IoFilter } from "react-icons/io5";
import { FaCar, FaHome, FaTshirt, FaCouch } from 'react-icons/fa';
import HeaderFilterCard from '../headerFilterCard/HeaderFilterCard';
import style from './navbar.module.css';
import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import data from "../../../data.json"
import { IoIosArrowForward } from "react-icons/io";


const Navbar = () => {
    const [selectedCity, setSelectedCity] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isFilterCardOpen, setFilterCardOpen] = useState(false);
    const [input, setInput] = useState(""); 
    const [filterData, setFilterData] = useState([]);
    const navigate = useNavigate();

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
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const toggleFilterCard = () => setFilterCardOpen((prev) => !prev);
    useEffect(() => {
        if (input.trim() !== "") {
            const filtered = data.filter((item) => item.title.toLowerCase().includes(input.trim().toLowerCase()));
            setFilterData(filtered);
        } else {
            setFilterData([]);
        }
    }, [input]);    

    return (
        <>
            <nav className={style.navbar}>
                <div className="container">
                    <div className={style.navbar_container}>
                        <p className={style.navbarBrand} onClick={()=>navigate("/")}>EasySaleApp</p>
                        <div className={style.offcanvasBody}>
                            <div className={style.categoryBox} onClick={openModal}>
                                <BiSolidCategoryAlt /> Kategoriya
                            </div>
                            <div className={style.inputGroup}>
                                <select value={selectedCity} onChange={handleCityChange} className={style.navBar_selectBox}>
                                    <option value="">--Şəhər seçin--</option>
                                    {cities.map((city, index) => (
                                        <option key={index} value={city}>{city}</option>
                                    ))}
                                </select>
                                <input
                                    placeholder="Əşya və ya xidmət axtarışı"
                                    type="text"
                                    className={style.searchInput}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                />
                                <button className={style.searchBtn}>
                                    <IoSearchSharp className={style.icon} />
                                </button>
                            </div>
                        </div>
                        <div className={style.advertsBox}>
                            <button className={style.advertsBox_btn_new}onClick={()=>navigate('/yeniElan')}><IoAddSharp /> Yeni Elan</button>
                            <button className={style.advertsBox_btn_filter} onClick={toggleFilterCard}>
                                <IoFilter /> Filter
                            </button>
                        </div>
                        <FaBars className={style.bar_icon} onClick={()=>navigate('/headerBox')} />
                    </div>
                </div>
            </nav>

            {isFilterCardOpen && <HeaderFilterCard isFilterCardOpen={isFilterCardOpen} />}
            {isModalOpen && (
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
            )}
        </>
    );
};

export default Navbar;
