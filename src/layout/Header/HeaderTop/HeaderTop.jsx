import React, { useState, useEffect } from 'react';
import { FaUser, FaRegHeart } from "react-icons/fa";
import style from "../header.module.css";
import { useNavigate } from 'react-router-dom';

export default function HeaderTop() {
  const navigate = useNavigate();
  const cities = ['Az', 'Rus', 'En'];
  const [selectedCity, setSelectedCity] = useState('Az');
  const [user, setUser] = useState(null); // Kullanıcı bilgilerini tutmak için state
  const [loading, setLoading] = useState(false); // Yükleniyor durumu için state

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  // Giriş işlemi
  const handleLogin = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://restartbaku-001-site3.htempurl.com/api/auth", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: "user@example.com", // Gerçek e-posta girilmeli
          password: "123456", // Gerçek şifre girilmeli
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data); // Gelen kullanıcı bilgilerini state'e kaydediyoruz
        console.log("User Logged In:", data); // Log'a yazdırıyoruz
        navigate("/logIn"); // Giriş sonrası başka bir sayfaya yönlendirme
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setLoading(false); // Yükleniyor durumunu kapatıyoruz
    }
  };

  return (
    <div className={style.headerTop}>
      <div className="container">
        <div className={style.headerTop_container}>
          <div className={style.headerTop_container_left}>
            <div className={style.contactNum}>Dəstək: (077) 613-59-59</div>
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
              <span>Sevimlilər</span>
            </a>
            <a
              className={style.headerTop_container_right_item}
              onClick={handleLogin}
            >
              <FaUser className={style.headerTop_container_right_icon} />
              <span>
                {loading ? "Giriş yapılıyor..." : user ? "" : "Giriş"} {/* Eğer kullanıcı varsa "Giriş" metnini kaldırıyoruz */}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

}
