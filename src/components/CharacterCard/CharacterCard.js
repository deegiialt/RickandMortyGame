import React from "react";
import "./CharacterCard.css";
const CharacterCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div>
    <span className="remove"></span>
  	</div>
  </div>
);
export default CharacterCard;