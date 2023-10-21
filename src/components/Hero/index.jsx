import React from 'react';
import "./Hero.css"

function Hero() {
    return (
        <div className="hero__container">
            <div>
                <img className="hero__discount" src="/images/Pod_shapkoy.png" alt="Pod_shapkoy"/>
            </div>
            <h1 className="hero__offer_text">Специальные предложения</h1>
            <div className="hero__offers_container">
                <img className="hero__offer" src="/images/special_offers/1.jpg" alt="1"/>
                <img className="hero__offer" src="/images/special_offers/2.jpg" alt="2"/>
                <img className="hero__offer" src="/images/special_offers/3.jpg" alt="3"/>
                <img className="hero__offer" src="/images/special_offers/4.jpg" alt="4"/>
                <img className="hero__offer" src="/images/special_offers/5.jpg" alt="5"/>

                <img className="hero__offer" src="/images/special_offers/6.jpg" alt="6"/>
                <img className="hero__offer" src="/images/special_offers/7.jpg" alt="7"/>
                <img className="hero__offer" src="/images/special_offers/8.jpg" alt="8"/>
                <img className="hero__offer" src="/images/special_offers/9.jpg" alt="9"/>
                <img className="hero__offer" src="/images/special_offers/10.jpg" alt="10"/>

                <img className="hero__offer" src="/images/special_offers/11.jpg" alt="11"/>
                <img className="hero__offer" src="/images/special_offers/12.jpg" alt="12"/>
                <img className="hero__offer" src="/images/special_offers/13.jpg" alt="13"/>
                <img className="hero__offer" src="/images/special_offers/14.jpg" alt="14"/>
                <img className="hero__offer" src="/images/special_offers/15.jpg" alt="15"/>
            </div>
        </div>
    );
}

export default Hero;