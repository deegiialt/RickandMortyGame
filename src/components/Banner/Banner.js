import React from "react";
import "./Banner.css";
const Banner = props => (
  <div className="banner">
    <div className="jumbotron">
    <span> Clicky Game </span>
    <span> You guessed {props.guessed} </span>
    <span> Score: {props.currentScore} | Top score: {props.topScore} </span>
    </div>
  </div>
);
export default Banner;