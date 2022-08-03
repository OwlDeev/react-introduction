/* eslint-disable jsx-a11y/alt-text */
import React, {} from 'react'

const Card = (props) => {
  return (
    <div>
      <img className="imageGrid" src={props.src}></img>
      <h1 className="textAlignCenter">{props.title}</h1>
      <h3 className="textAlignCenter">{props.description}</h3>
    </div>
  );
};
export default Card;
