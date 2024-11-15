import React, { useState } from "react";
import userIcon from "../../img/user.svg"; // Replace with an appropriate icon if necessary
import passwordIcon from "../../img/password.svg";
import styles from "./SignUp.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import backImg from "../../img/loginImg.png"

const Login = () => {
  const [data, setData] = useState({
    userName: "", // Changed from email to userName
    password: "",
  });
  const navigate=useNavigate()

  const [touched, setTouched] = useState({});

  // Verileri API'ye gönderme fonksiyonu
  const checkData = async (obj) => {
    const { userName, password } = obj;
    const urlApi = `http://restartbaku-001-site3.htempurl.com/api/auth`;
    const payload = {
      userName: userName.toLowerCase(), // API'den beklenen userName
      password: password, // API'den beklenen password
    };

    try {
      // API'ye post isteği gönderiyoruz
      const response = await axios.post(urlApi, payload, {
        headers: {
          "Content-Type": "application/json", // JSON formatında veri gönderiyoruz
        },
      });

      // API yanıtını kontrol et
      console.log("API Response:", response);

      // Eğer token dönerse, bunu localStorage'a kaydediyoruz
      if (response.data && response.data.token) {
        localStorage.setItem("authToken", response.data.token);
        toast.success("You logged in successfully.");
      } else {
        toast.error("Your password or username is incorrect.");
      }
    } catch (error) {
      // Hata durumunda mesaj
      console.error("Login Error:", error);
      if (error.response) {
        // Eğer API yanıtı varsa, yanıtı konsola yazdır
        console.error("API Error Response:", error.response.data);
        toast.error(`Error: ${error.response.data.message || "Something went wrong!"}`);
      } else {
        toast.error("Something went wrong! Please try again.");
      }
    }
  };

  // Kullanıcı verilerini değiştirme
  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  // Input alanlarına odaklanıldığında "touched" durumunu güncelleme
  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    checkData(data); // Veriyi API'ye gönder
  };
  const handleButtonClick = () => {
    checkData(data); // Veriyi API'ye gönder
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
      <form className={styles.formLogin} onSubmit={submitHandler} autoComplete="off">
        <h2>Sign In</h2>
        <div>
          <div className={styles.Input}>
            <input
              type="text"
              name="userName" // Changed to userName
              value={data.userName} // Bind to userName
              placeholder="Username" // Updated placeholder
              onChange={changeHandler}
              onFocus={focusHandler}
              autoComplete="off"
            />
            <img src={userIcon} alt="Username icon" />
          </div>
        </div>
        <div>
          <div className={styles.Input}>
            <input
              type="password"
              name="password"
              value={data.password}
              placeholder="Password"
              onChange={changeHandler}
              onFocus={focusHandler}
              autoComplete="off"
            />
            <img src={passwordIcon} alt="Password icon" />
          </div>
        </div>

        <div>
          <button onClick={()=>navigate('/signup')} className={styles.loginNavigateBtn} type="submit">Login</button>
          <span style={{ color: "red", textAlign: "center", display: "inline-block", width: "100%" }}>
            Don't have an account? <Link to="/signup">Create account</Link>
          </span>
        </div>
      </form>
        <button type="button" onClick={handleButtonClick} className={styles.loginBtn}>
          Send Data to API
        </button>
      <ToastContainer />
      </div>
      <img src={backImg} alt={backImg} className={styles.LoginSignUpBackImg}/>
    </div>
  );
};

export default Login;
