import React from "react";

export default function Header({basketCount}) {
    const items = JSON.parse(localStorage.getItem("items"));
    basketCount = items ? items.length : 0;
  return (
      <header className="header">
          <a href="/">
              <img src="/images/qpick_logo.png" alt="Логотип qpick" className="header__logo"/>
          </a>

          <div className="header__links">

              <a className="header__link-icon" href="#">
                  <img src="/images/heart_icon.svg" alt="Иконка сердце" className="header__heart-icon"/>
              </a>
              <span className="header__heart-number">2</span>

              <a className="header__link-icon" href="/basket">
                  <img src="/images/trolley_icon.svg" alt="Иконка корзина" className="header__trolley-icon"/>
              </a>
              {basketCount ? <span className="header__heart-number-trolley">{basketCount}</span> : ``}

          </div>
      </header>
  );
}