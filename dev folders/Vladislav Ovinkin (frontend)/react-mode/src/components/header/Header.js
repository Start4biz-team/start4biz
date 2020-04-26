import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import logoImage from './../../img/pre-logo.png';

function Header() {
    return (
    <header className="main-header">
        <div className="header-up">
            <div className="header-up-left">
                <span className="header-up-left-adress">
                    Санкт-Петербург, пл. Карла Фаберже, д8 
                </span>
            </div>
            <Link to="/" className="header-up-logo-link" title="На главную страницу">
                <img className="header-up-logo" src={logoImage} width="40" height="30" alt="Start4.biz logo" />
            </Link>
            <div className="header-up-right">
                <a className="header-up-right-email" href="mailto:info@start4.biz" title="Написать письмо">info@start4.biz</a>
                <a className="header-up-right-phone" href="tel:+79111299351" title="Просто позвоните нам!">+7 911 129-93-51</a>
            </div>
        </div>
        <div className="header-down">
            <nav className="header-down-left-menu">
                <ul className="header-down-left-menu-list">
                    <li className="header-down-left-menu-item"><Link to="/About#about" className="header-down-left-menu-link">О проекте</Link></li>
                    <li className="header-down-left-menu-item"><Link to="/toBusiness" className="header-down-left-menu-link">Бизнесу</Link></li>
                    <li className="header-down-left-menu-item"><Link to="/toFinorg" className="header-down-left-menu-link">Финансовым организациям</Link></li>
                    <li className="header-down-left-menu-item"><Link to="/About#contacts" className="header-down-left-menu-link">Контакты</Link></li>
                </ul>
            </nav>
            <a className="header-down-lk" href="#">Личный кабинет</a>
            <div className="header-down-right-menu">
                <ul className="header-down-right-menu-list">
                    <li className="header-down-right-menu-item"><Link to="/" className="header-down-right-menu-link">Кредиты</Link></li>
                    <li className="header-down-right-menu-item"><Link to="/" className="header-down-right-menu-link">Эквайринг</Link></li>
                    <li className="header-down-right-menu-item"><Link to="/" className="header-down-right-menu-link">Овердрафты</Link></li>
                    <li className="header-down-right-menu-item"><Link to="/" className="header-down-right-menu-link">Лизинг</Link></li>
                </ul>
            </div>
        </div>
    </header>
    );
  }
  
  export default Header;