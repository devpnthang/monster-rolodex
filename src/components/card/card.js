import React from "react";
import './card.scss';

export const Card = ({...props}) => {
  return (
    <div className="card-container">
      <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
      <h2 className='card-container__monster-name'>{props.monster.name}</h2>
      <h4 className='card-container__monster-email'>{props.monster.email}</h4>
    </div>
  );
};
