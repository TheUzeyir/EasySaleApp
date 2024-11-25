import React, { useState, useEffect } from 'react';
import style from './categoryModal.module.css';
import { IoIosArrowForward } from "react-icons/io";

const CategoryModal = ({ closeModal }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          'http://restartbaku-001-site3.htempurl.com/api/Category/get-all-categories?LanguageCode=1'
        );
        const result = await response.json();
        console.log('API Yanıtı:', result);
        if (result.isSuccessful) {
          // ParentId'si null olan kategorileri filtrele
          const filteredCategories = result.data.filter(
            (category) => category.parentId === null
          );
          setCategories(filteredCategories);
        }
      } catch (error) {
        console.error('Kategorileri çekerken bir hata oluştu:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className={style.modalCategoryModal}>
      <div className={style.modalContent}>
        <button onClick={closeModal} className={style.modalContent_btn}>X</button>
        <div className={style.modalBody}>
          <div className={style.categories}>
            {categories.map((category) => (
              <div
                key={category.categoryId}
                onMouseEnter={() => setSelectedCategory(category)}
                className={style.categoryItem}
              >
                {/* Kategoriyi seçtiğinizde products özelliğini kullanmadan önce kontrol edin */}
                <span className={style.categoryIcon}>{/* kategori.icon yerine doğru veri kullanın */}</span>
                {category.categoryTitle}
              </div>
            ))}
          </div>
          <div className={style.products}>
            {selectedCategory ? (
              <ul className={style.products_ul}>
                {/* selectedCategory.products var mı diye kontrol et */}
                {selectedCategory.products && selectedCategory.products.length > 0 ? (
                  selectedCategory.products.map((product, index) => (
                    <li className={style.products_li} key={index}>
                      {product} <IoIosArrowForward />
                    </li>
                  ))
                ) : (
                  <p>Bu kategorinin ürünü bulunmamaktadır.</p>
                )}
              </ul>
            ) : (
              <p>Məhsulları görmək üçün kateqoriya seçin</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
