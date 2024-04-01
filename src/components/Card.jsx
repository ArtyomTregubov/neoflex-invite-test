import React from "react";
export default function Card({data, onCardClick}) {

  function onClickAddItem(item){
      onCardClick(item);
  }

  return (
      <article className="gallery__element">
          <div className="gallery__image-box">
              <img src={data.img} alt={data.alt} className="gallery__image"/>
          </div>
          <div className="gallery__description">
              <div className="gallery__container-1">
                  <span className="gallery__name">{data.title}</span>
                  <div className="gallery__box">
                      <img src="/images/star_icon.png" alt="Иконка звёздочка" className="gallery__star-icon"/>
                      <span className="gallery__rating">{data.rating}</span>
                  </div>
              </div>
              <div className="gallery__container-2">
                  <div className="gallery__price-box">
                      <span className="gallery__price">{data.price} ₽</span>
                      {data.priceDiscont &&<s className="gallery__price-discont">{data.priceDiscont} ₽</s>}
                  </div>
                  <button
                      className="gallery__buy"
                      onClick={() => onClickAddItem(data)}
                  >Купить</button>
              </div>
          </div>
      </article>
  );
}