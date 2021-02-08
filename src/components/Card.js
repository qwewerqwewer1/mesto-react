import React from 'react';

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="element">
      <button
        type="button"
        className="element__delete element__delete_active"
      ></button>
      <img className="element__image" alt={props.card.name} src={props.card.link} onClick={handleClick} />
      <div className="element__data">
        <h2 className="element__paragraph">{props.card.name}</h2>
        <div className="element__likes">
          <button type="button" className="element__like"></button>
          <span className="element__likes-users">{props.card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;