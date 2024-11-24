import React, { useState, useEffect } from 'react';
import Footer from '../../layout/footer/Footer';
import FooterResponsive from '../../layout/footer_responsive/FooterResponsive';
import style from "./newProductAdd.module.css";
import HeaderTop from '../../layout/Header/HeaderTop/HeaderTop';

const NewProductAdd = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const cities = ['Bakı', 'Gəncə', 'Sumqayıt', 'Şəki', 'Lənkəran'];

  useEffect(() => {
    // API-dən kateqoriyaları çəkmək üçün fetch istifadə edirik
    fetch('http://restartbaku-001-site3.htempurl.com/api/Category/get-all-categories?LanguageCode=1')
      .then(response => response.json())
      .then(data => {
        // Məlumatları state-ə yükləyirik
        setCategories(data.data);
      })
      .catch(error => {
        console.error("Hata oluştu:", error);
      });
  }, []);

  return (
    <div className={style.addBox_main_container}>
      <HeaderTop />
      <div className="container">
        <div className={style.addBox_container}>
          <p className={style.addBox_title}>Yeni elan</p>
          <div className={style.addBox}>
            <div className={style.addBox_left}>
              <div className={style.addBox_left_box_top}>
                <div className={style.addBox_left_box_top_card}>
                  Kateqoriya
                  <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className={style.addBox_left_box_top_card_item}
                  >
                    <option value="">--Kat seçin--</option>
                    {/* API-dən alınan kateqoriyaları buraya əlavə edirik */}
                    {categories.map((category) => (
                      <option key={category.categoryId} value={category.categoryId}>
                        {category.categoryTitle}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={style.addBox_left_box_top_card}>
                  Şəhər
                  <select
                    value={selectedCity}
                    onChange={handleCityChange}
                    className={style.addBox_left_box_top_card_item}
                  >
                    <option value="">--Şəhər seçin--</option>
                    {cities.map((city, index) => (
                      <option key={index} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
                <div className={style.addBox_left_box_top_card}>
                  Qiymət, AZN
                  <div className={style.addBox_left_box_top_card_item}>
                    <input required type="text" className={style.addBox_left_box_top_card_item_input} /> AZN
                  </div>
                </div>
                <div className={style.addBox_left_box_top_card}>
                  Məzmun
                  <textarea
                    className={style.addBox_left_box_top_card_item_textArea}
                    name=""
                    id=""
                  ></textarea>
                </div>
              </div>

              <div className={style.addBox_left_box_main}>
                <p className={style.addBox_left_box_main_title}>Əlaqə məlumatları</p>
                <div className={style.addBox_left_box_main_card}>
                  Adınız
                  <input type="text" className={style.addBox_left_box_top_card_item} required />
                </div>
                <div className={style.addBox_left_box_main_card}>
                  E-mail
                  <input type="email" className={style.addBox_left_box_top_card_item} required />
                </div>
                <div className={style.addBox_left_box_main_card}>
                  Mobil nömrə
                  <input
                    pattern="[050]{123}-[45]{67}"
                    required
                    type="tel"
                    max={10}
                    min={10}
                    className={style.addBox_left_box_top_card_item}
                  />
                </div>
              </div>

              <div className={style.addBox_left_box_bottom}>
                <p>Elan yerləşdirərək, siz Tap.az-ın İstifadəçi razılaşması ilə razı olduğunuzu təsdiq edirsiniz.</p>
                <button className={style.addBox_left_box_bottom_btn}>Elanı əlavə et</button>
              </div>
            </div>

            <div className={style.addBox_right}>
              <p className={style.addBox_right_title}>EasySaleApp-ın sadə qaydaları</p>
              <p className={style.addBox_right_subTitle}>* Eyni elanı bir neçə dəfə təqdim etməyin.</p>
              <p className={style.addBox_right_subTitle}>* Təsvir və ya şəkillərdə telefon, email və ya sayt ünvanı göstərməyin.</p>
              <p className={style.addBox_right_subTitle}>* Ad yerində qiymət yazmayın - bunun üçün ayrıca yer var.</p>
              <p className={style.addBox_right_subTitle}>* Qadağan olunmuş məhsulları satmayın.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FooterResponsive />
    </div>
  );
};

export default NewProductAdd;
