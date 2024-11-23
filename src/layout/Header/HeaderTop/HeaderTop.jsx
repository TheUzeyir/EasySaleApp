import React, { useState, useEffect } from "react";
import { FaUser, FaRegHeart } from "react-icons/fa";
import style from "../header.module.css";
import { useNavigate } from "react-router-dom";

export default function HeaderTop() {
  const navigate = useNavigate();
  const cities = ["Az", "Rus", "En"];
  const [selectedCity, setSelectedCity] = useState("Az");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  useEffect(() => {
    const savedUserName = localStorage.getItem("userName");
    if (savedUserName) {
      setUser({ username: savedUserName }); // Kullanıcı bilgilerini kaydet
    }
    setLoading(false); // Kontrol tamamlandı
  }, []);

  return (
    <div className={style.headerTop}>
      <div className="container">
        <div className={style.headerTop_container}>
          <div className={style.headerTop_container_left}>
            <div className={style.contactNum}>Destek: (077) 613-59-59</div>
          </div>
          <div className={style.headerTop_container_right}>
            <select
              value={selectedCity}
              onChange={handleCityChange}
              className={style.headerTop_container_right_langBox}
            >
              {cities.map((city, index) => (
                <option
                  className={style.headerTop_container_right_langBox_item}
                  key={index}
                  value={city}
                >
                  {city}
                </option>
              ))}
            </select>
            <a
              className={style.headerTop_container_right_item}
              onClick={() => navigate("/likedPage")}
            >
              <FaRegHeart className={style.headerTop_container_right_icon} />
              <span>Favoriler</span>
            </a>
            <a
              className={style.headerTop_container_right_item}
              onClick={() => navigate("/login")}
            >
              <FaUser className={style.headerTop_container_right_icon} />
              <span>
                {loading
                  ? "Yükleniyor..."
                  : user
                  ? `${user.username}`
                  : "Giriş"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
