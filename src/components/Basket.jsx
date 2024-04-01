import React from "react";
import CardBasket from "./CardBasket";
import useStore from "../store";

const Basket = ({onCardClick}) => {
    let { items } = useStore() ;
    items = items.length > 0 ? items : JSON.parse(localStorage.getItem("items"));
    let calculateSum;
    let countItems = {};
    let itemsRender = [];
    if(items){
            calculateSum = items.reduce(
          (accumulator, item) => {
              const price = item.priceDiscont || item.price;
              return accumulator + price;
          }, 0,
        );

        items.map((info) => {
                          countItems[info.id] = countItems[info.id] ? countItems[info.id] + 1 : 1;})
        Object.keys(countItems).forEach((id, count) => {
              const item = items.find((item) => item.id === Number(id));
              itemsRender.push(item);
        })
    }

  return (
      <>
          <section className="card">
              <h2 className="gallery__title card__title">Корзина</h2>
              <div className="card__box">
                  <div className="card__product-container">
                      {items && items.length > 0 ? itemsRender.map((item) => {
                          return (
                              <CardBasket
                                  data={item}
                                  onCardClick={onCardClick}
                                  key={item.id}
                                  countItem={countItems[item.id]}
                              />
                          );
                      }) : ""}
                  </div>
                  <div className="card__result">
                      <div className="card__result-container">
                          <span className="card__result-text">Итого</span>
                          <span className="card__result-price">{calculateSum} ₽</span>
                      </div>
                      <button className="card__make-button">Перейти к оформлению</button>
                  </div>
              </div>
          </section>
      </>
);
}

export default Basket;