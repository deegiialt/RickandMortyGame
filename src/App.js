import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Banner from "./components/Banner"
import { Col, Row, Container } from "./components/Grid";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters,
    correct: "false",
    guessed: [],
    score: 0,
    topScore: 0
  };

  handleClick = id => {
    // id.preventDefault();
    let correct = this.state.correct;
    let guessed = this.state.guessed;
    let score = this.state.score;
    let topScore = this.state.topScore;

    if(this.state.guessed.indexOf(id) === -1) {
      guessed.push(id);
      score ++;
      correct = "true";
    } else {
      if(score < topScore) {
        topScore = score;
      }
      guessed= [];
      score= 0;
    } 

    this.setState({ guessed })
    this.setState({ score })
    this.setState({ topScore })
  }

 shuffle = a => {
   for (let i = a.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [a[i], a[j]] = [a[j], a[i]];
   }
   return a;
 }

  // Map over this.state.characters and render a characterCard component for each character object
  render() {
    {this.shuffle(this.state.characters)}
    return (
      <Container fluid>
      <Row>
      <Col size="md-12">
      <div className="wrapper">
      <Banner 
        guessed={this.state.guessed}
        score={this.state.score}
        topScore={this.state.topScore}
      />
        {this.state.characters.map(character => (
          <CharacterCard
            id={character.id}
            key={character.id}
            image={character.image}
            onClick={() => this.handleClick(character.id)}
          />
        ))}
      </div>
      </Col>
      </Row>
      </Container>
    );
  }
}

export default App;