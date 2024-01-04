import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css';
import logo from "../../../Data/Logo/Logo.png";
import claim from "../../../Data/Logo/claim.png";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };
    return (
        <header>
            <nav className='header-bar'>
                <div className="logo">
                    <img className="navbar-logo" src={logo} alt="logo" />
                    <h1 className='logo-name'>CAR INSURANCE</h1>
                </div>
                <div className="nav-bar">
                    <div className="center-icons">
                        <Link className="home-button" to=''>
                            <div className="icon-container">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
                                    className="menu-icon"
                                    alt=""
                                />
                                <span className="menu-text">Trang Chủ</span>
                            </div>
                        </Link>
                        <Link className="bt-button" to='about'>
                            <div className="icon-container">
                                <img
                                    src={claim}
                                    className="menu-icon"
                                    alt=""
                                />
                                <span className="menu-text">Bồi thường</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="login-button">
                    <button onClick={handleLogin}>Log In</button>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;