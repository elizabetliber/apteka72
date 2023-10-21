import React from 'react';
import './Header.css'

function Header() {
    return (
        <div className="header__container">
            <p>Потенциал здоровья</p>
            <a href="/" className="header__logoHref">
                <img src="/images/Logotip.png" alt="LOGO"/>
            </a>
            <input className="header__input" placeholder="Я ищу..."/>
            <div className="header__menu">
                <div className="header__item">
                    <p className="header__item_text">Избранное</p>
                    <img className="header__item_icon" src="/images/icons/favotites.png" alt="favorites"/>
                </div>
                <div className="header__item">
                    <p className="header__item_text">Сравнение</p>
                    <img className="header__item_icon" src="/images/icons/comparison.png" alt="comparison"/>
                </div>
                <div className="header__item">
                    <p className="header__item_text">Корзина</p>
                    <img className="header__item_icon" src="/images/icons/basket.png" alt="basket"/>
                </div>
            </div>
        </div>
    );
}

export default Header;