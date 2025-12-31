import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo_center.png';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <img src={logo} alt="Logo" />
                <h1 className="header-title">Claire-克萊兒皮膚管理中心</h1>
            </div>
            <nav className="header-nav">
                <ul>
                    <li><Link to="/">首 頁</Link></li>
                    <li><Link to="/services">服 務</Link></li>
                    <li><Link to="/about">關 於</Link></li>
                    <li><Link to="/contact">聯 絡</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;