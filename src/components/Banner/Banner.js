import React from "react";
import "./Banner.css";
import { Col, Row, Container } from "../Grid";
const Banner = props => (
<Container fluid>
<Row>
<Col size = "md-12">
  <div className="banner">
    <div className="jumbotron">
    <span> Clicky Game </span>
    <span> You guessed {props.correct} </span>
    <span> Score: {props.score} | Top score: {props.topScore} </span>
    </div>
  </div>
 </Col>
 </Row>
 </Container>
);
export default Banner;