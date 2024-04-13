import React from "react";

function Card({ cardData, onClick, onDelete }) {
  return (
    <div
      id="card"
      className="p-5 rounded-xl border border-slate-300"
      onClick={onClick}
    >
      <div className="flex justify-between">
        <p id="cardTitle" className="font-bold">
          {cardData.name}
        </p>
        <a
          href="#"
          id="deleteCard"
          onClick={(e) => {
            e.preventDefault();
            onDelete(cardData.id);
          }}
        >
          <i className="fa fa-minus-square-o fa-2x" />
        </a>
      </div>
      <p id="cardNumber">{cardData.cardNumber}</p>
      <p id="cardExpiry" className="font-medium">
        {cardData.expiry}
      </p>
    </div>
  );
}

export default Card;
