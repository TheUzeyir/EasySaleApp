import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoSearchSharp,IoAddSharp,IoFilter  } from "react-icons/io5";
import HeaderFilterCard from '../headerFilterCard/HeaderFilterCard';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [selectedCity, setSelectedCity] = useState('');
    const [showFilter, setShowFilter] = useState(false);
    const navigate=useNavigate()

    const cities = ['Bakı', 'Gəncə', 'Sumqayıt', 'Şəki', 'Lənkəran'];

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value); 
    };

    const toggleFilterCard = () => {
        setShowFilter(prev => !prev);
    };

    return (
        <>
            <nav className="navbar navbar-expand-xl bg-light  align-items-center">
                <div className="container">
                    <a className="navbar-brand" onClick={()=>navigate('/')}>EasySaleApp</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="category-box">
                                <BiSolidCategoryAlt className='icon' /><span>Kategoriya</span>
                            </div>
                            <div className="input-group">
                                <select value={selectedCity} onChange={handleCityChange}>
                                    <option value="">--Şəhər seçin--</option>
                                    {cities.map((city, index) => (
                                        <option key={index} value={city}>
                                            {city}
                                        </option>
                                    ))}
                                </select>
                                <input placeholder="Əşya və ya xidmət axtarışı" type="text" className='search-input' />
                                <button className='search-btn'><IoSearchSharp className='icon'/></button>
                            </div>
                            <div className="adverts-box">
                                <button href="#"><IoAddSharp className='icon'/>Yeni Elan</button>
                                <button href="#" onClick={toggleFilterCard}><IoFilter className='icon'/> Filter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
