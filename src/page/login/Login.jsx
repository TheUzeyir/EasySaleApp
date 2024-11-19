import React, { useState } from "react";
import userIcon from "../../img/user.svg";
import passwordIcon from "../../img/password.svg";
import styles from "./SignUp.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import backImg from "../../img/loginImg.png";

const Login = () => {
  const [data, setData] = useState({
    userName: "", // API'nin beklediği "userName" alanı
    password: "",
  });

  const navigate = useNavigate();

  // API'ye POST isteği gönderme
  const checkData = async (obj) => {
    const urlApi = `http://restartbaku-001-site3.htempurl.com/api/auth`;

    try {
      console.log("Gönderilen veri:", obj); // Veriyi kontrol edin

      const response = await axios.post(urlApi, obj, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("API Yanıtı:", response);

      // Yanıtın içinde token olup olmadığını kontrol edelim
      if (response.data && response.data.token) {
        console.log("Token Bulundu:", response.data.token); // Token'ı konsola yazdır
        localStorage.setItem("authToken", response.data.token);
        toast.success("You logged in successfully.");
        navigate("/dashboard"); // Başarılı girişte yönlendirme
      } else if (response.data && response.data.message) {
        // API'nin hata mesajını kontrol et
        toast.error(response.data.message || "Your username or password is incorrect.");
      } else {
        // Beklenmeyen durumlar için hata mesajı
        toast.error("Your username or password is incorrect.");
      }
    } catch (error) {
      // Hata durumlarını ele alma
      console.error("Login Hatası:", error);

      if (error.response) {
        console.error("API Hatası Yanıtı:", error.response.data);
        toast.error(
          `Error: ${
            error.response.data.message ||
            error.response.statusText ||
            "Something went wrong!"
          }`
        );
      } else {
        toast.error("Network error. Please check your connection.");
      }
    }
  };

  // Input değişikliklerini dinleyen fonksiyon
  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  // Form submit edildiğinde çalışacak fonksiyon
  const submitHandler = (event) => {
    event.preventDefault();
    if (data.userName && data.password) {
      console.log("Form gönderilmeden önceki veri:", data); // Form verisi konsola yazdırılır
      checkData(data); // Formdaki verileri API'ye gönder
    } else {
      toast.error("Please fill in all fields.");
    }
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
                name="userName"
                value={data.userName}
                placeholder="Username"
                onChange={changeHandler}
                autoComplete="off"
              />
              <img src={userIcon} alt="User Icon" />
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
                autoComplete="off"
              />
              <img src={passwordIcon} alt="Password Icon" />
            </div>
          </div>

          <button type="submit" className={styles.loginBtn}>
            Login
          </button>
          <div>
            <span style={{ color: "red", textAlign: "center", display: "inline-block", width: "100%" }}>
              Don't have an account? <Link to="/signup">Create account</Link>
            </span>
          </div>
        </form>
        <ToastContainer />
      </div>
      <img src={backImg} alt="Background" className={styles.LoginSignUpBackImg} />
    </div>
  );
};

export default Login;
