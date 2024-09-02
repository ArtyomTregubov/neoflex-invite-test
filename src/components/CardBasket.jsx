import React from "react";

export default function CardBasket({data, onCardClick, countItem, onDeleteItem, onDecreaseItem}) {

  function onClickAddItem(item){
      onCardClick(item);
  }

  function onClickDeleteItem(item){
    onDeleteItem(item);
  }

  return (
      <div className="card__product">
          <div className="card__container-1">
              <img src={data.img} alt={data.alt}
                   className="card__image"/>
              <div className="card__button-container">
                  <button 
                      className="card__plus-minus"
                      onClick={() => onDecreaseItem(data)}
                      disabled={countItem <= 0}
                  >-</button>
                  
                  <span className="card__figure">{countItem}</span>
                  <button
                      className="card__plus-minus"
                      onClick={() => onClickAddItem(data)}
                  >+</button>

              </div>
          </div>
          <div className="card__container-2">
              <span className="card__name">{data.title}</span>
              <span className="card__price">{data.priceDiscont ? data.priceDiscont : data.price} ₽</span>
          </div>
          <div className="card__container-3">
              <button className="card__trash-button" 
                      onClick={() => onClickDeleteItem(data)}>
                  <img src="/images/trash_icon.svg" alt="Картинка корзины" className="card__trash"/>
              </button>
              
              <span className="card__price-2">{data.priceDiscont ? data.priceDiscont : data.price} ₽</span>
          </div>
      </div>
    );
}
