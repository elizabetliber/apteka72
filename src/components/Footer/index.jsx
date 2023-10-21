import React from 'react';
import "./Footer.css"

function Footer() {
    return (
        <div className="footer__container">
            <div className="footer__item">
                <a className="footer__href">ПРИЛОЖЕНИЯ</a>
            </div>
            <div className="footer__item">
                <a className="footer__href">СЛЕДИТЕ ЗА НАМИ</a>
            </div>
            <div className="footer__item">
                <a className="footer__href">ГОРЯЧАЯ ЛИНИЯ</a>
            </div>
            <div className="footer__item">
                <a className="footer__href">О КОМПАНИИ</a>
            </div>
            <div className="footer__item">
                <a className="footer__href">ПОМОЩЬ</a>
            </div>
            <div className="footer__item">
                <a className="footer__href">АКЦИИ И РАСПРОДАЖИ</a>
            </div>
            <div className="footer__item">
                <a className="footer__href">ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ</a>
            </div>
        </div>
    );
}

export default Footer;