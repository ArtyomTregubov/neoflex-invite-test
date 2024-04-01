import React from "react";

export default function Footer() {
  return (
      <footer className="footer">
          <a href="/">
              <img src="/images/qpick_logo.png" alt="Логотип qpick" className="footer__logo"/>
          </a>

          <div className="footer__link-container">
              <a className="footer__link" href="#">Избранное</a>
              <a className="footer__link" href="/basket">Корзина</a>
              <a className="footer__link" href="#">Контакты</a>
          </div>

          <div className="footer__link-container">
              <a className="footer__link" href="#">Условия сервиса</a>
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

              <a className="footer__link" href="https://vk.com/neoflex_ru">
                  <img src="/images/vk_icon.svg" alt="Логотип vk" className="footer__social-network-icon"/>
              </a>

              <a className="footer__link" href="https://t.me/neoflexcareers">
                  <img src="/images/telegram_icon.svg" alt="Логотип telegram"
                       className="footer__social-network-icon"/>
              </a>

              <a className="footer__link" href="#">
                  <img src="/images/whatsapp_icon.svg" alt="Логотип whatsapp"
                       className="footer__social-network-icon"/>
              </a>

          </div>

      </footer>
  );
}