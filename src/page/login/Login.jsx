import React, { useState } from 'react';
import './login.css';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const [isRightPanelActive, setRightPanelActive] = useState(false);

    const handleSignUpClick = () => {
        setRightPanelActive(true);
    };

    const handleSignInClick = () => { 
        setRightPanelActive(false);
    }; 

    const navigate=useNavigate()

    return (
        <div className="SignUp">
            <p className='SignUp_goBack' onClick={()=>navigate(-1)}><MdOutlineKeyboardArrowLeft/>Go Back</p>
            <div className={`containers ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
                <div className="form-container sign-up-container">
                    <form className="SignUp_form" action="#">
                        <h1 className="SignUp_title">Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="SignUps_linkText"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="SignUps_linkText"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="SignUps_linkText"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span className="SignUp_subtitle">or use your email for registration</span>
                        <input className='SignUp_input' type="text" placeholder="Name" />
                        <input className='SignUp_input' type="email" placeholder="Email" />
                        <input className='SignUp_input' type="password" placeholder="Password" />
                        <button className="SignUp_icon">Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form className="SignUp_form" action="#">
                        <h1 className="SignUp_title">Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="SignUps_linkText"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="SignUps_linkText"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="SignUps_linkText"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span className="SignUp_subtitle">or use your account</span>
                        <input className='SignUp_input' type="email" placeholder="Email" />
                        <input className='SignUp_input' type="password" placeholder="Password" />
                        <a href="#" className='SignUps_linkText'>Forgot your password?</a>
                        <button className="SignUp_icon">Sign In</button>
                    </form>
                </div>

                {/* Overlay */}
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="SignUp_title">Welcome Back!</h1>
                            <p className="SignUp_text">To keep connected with us please login with your personal info</p>
                            <button className="btn_ghost" onClick={handleSignInClick} id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="SignUp_title">Hello, Friend!</h1>
                            <p className="SignUp_text">Enter your personal details and start your journey with us</p>
                            <button className="btn_ghost" onClick={handleSignUpClick} id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
