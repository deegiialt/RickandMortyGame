import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Banner from "./components/Banner"
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters,
    correct: "",
    guessed: [],
    score: 0,
    topScore: 0
  };

  handleClick = id => {
    let correct = this.state.correct;
    let guessed = this.state.guessed;
    let score = this.state.score;
    let topScore = this.state.topScore;

    if(this.state.guessed.indexOf(id) === -1) {
      guessed.push(id);
      score ++;
      correct = "correctly!";
    } else {
      if(score < topScore) {
        topScore = score;
      }
      guessed= [];
      score= 0;
      correct = "wrong!";
    } 

    this.setState({ guessed, topScore, correct, score })
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
            correct={this.state.correct}
            onClick={() => this.handleClick(character.id)}
          />
        ))}
      </div>
    );
  }
}

export default App;