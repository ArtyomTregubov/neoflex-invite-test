import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
      <footer className="footer">
          <Link to="/">
              <img src="/images/qpick_logo.png" alt="Логотип qpick" className="footer__logo"/>
          </Link>

          <div className="footer__link-container">
              <Link className="footer__link" to="#">Избранное</Link>
              <Link className="footer__link" to="/basket">Корзина</Link>
              <Link className="footer__link" to="#">Контакты</Link>
          </div>

          <div className="footer__link-container">
              <Link className="footer__link" to="#">Условия сервиса</Link>
              <div className="footer__languge-buttons">
                  <button className="footer__languge-button">
                      <img src="/images/language_icon.png" alt="Логотип выбора языка"
                           className="footer__languge-icon"/>
                  </button>
                  <span className="footer__languge_active">Рус</span>
                  <span className="footer__languge">Eng</span>
              </div>
          </div>
          

          <div className="footer__social-networks">

              <Link className="footer__link" to="https://vk.com/neoflex_ru">
                  <img src="/images/vk_icon.svg" alt="Логотип vk" className="footer__social-network-icon"/>
              </Link>

              <Link className="footer__link" to="https://t.me/neoflexcareers">
                  <img src="/images/telegram_icon.svg" alt="Логотип telegram"
                       className="footer__social-network-icon"/>
              </Link>

              <Link className="footer__link" to="#">
                  <img src="/images/whatsapp_icon.svg" alt="Логотип whatsapp"
                       className="footer__social-network-icon"/>
              </Link>

          </div>

      </footer>
  );
}