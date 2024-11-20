import React, { useState } from "react";
import userIcon from "../../img/user.svg";
import passwordIcon from "../../img/password.svg";
import styles from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import backImg from "../../img/loginImg.png";
import Swal from "sweetalert2";

const Login = () => {
  const errorMessages = (message) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message || "Istifadeci tapilmadi, xais olunur qeydiyyatdan kecin",
      footer: '<a href="/signup">Qeydiyyatdan kecmek ucun click et!</a>',
    });
  };

  const [data, setData] = useState({
    userName: "",
    password: "",
  });

  const navigate = useNavigate();

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (data.userName && data.password) {
      try {
        const response = await axios.post("http://restartbaku-001-site3.htempurl.com/api/auth", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        // Check if response is successful (200 OK) and contains data
        if (response.status === 200 && response.data) {
          console.log("API Response:", response); // Optional: Log the API response
          localStorage.setItem("authToken", response.data.token);
          navigate("/"); // Redirect to main if data is found
        } else {
          errorMessages("Data not found"); // Show error popup if no data found
        }
      } catch (error) {
        console.error("Login error", error);
        errorMessages(); // Show error popup for API errors
      }
    } else {
      errorMessages("Please fill in both username and password."); // Show error popup for validation errors
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
              />
              <img src={passwordIcon} alt="Password Icon" />
            </div>
          </div>
          <button type="submit" className={styles.loginBtn}>
            Login
          </button>
          <div>
            <span>
              Don't have an account? <Link to="/signup">Create account</Link>
            </span>
          </div>
        </form>
      </div>
      <img src={backImg} alt="Background" className={styles.LoginSignUpBackImg} />
    </div>
  );
};

export default Login;
