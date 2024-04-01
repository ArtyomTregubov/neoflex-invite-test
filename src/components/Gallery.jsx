import React from "react";
import Card from "./Card";

export default function Gallery({title, data, onCardClick}) {
  return (
      <>
      <h2 className="gallery__title">{title}</h2>
      <div className="gallery__grid">
        {data.map((info) => {
          return (
            <Card
              data={info}
              onCardClick={onCardClick}
              key={info.id}
            />
          );
        })}
      </div>
      </>
  );
}