import React from "react";
import "./Banner.css";

const Banner = props => (
  <div className="banner">
    <div className="jumbotron">
    <span> Clicky Game </span>
    <span> You guessed {props.correct} </span>
    <span> Score: {props.score} | Top score: {props.topScore} </span>
    </div>
  </div>
);
export default Banner;