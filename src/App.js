import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Banner from "./components/Banner"
// import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters,
    guessed: [],
    topScore: ""
  };

  handleClick = id => {
    // // Filter this.state.characters for characters with an id not equal to the id being removed
    // const characters = this.state.characters.filter(character => characters.id !== id);
    // // Set this.state.characters equal to the new characters array
    // this.setState({ characters });
    const characters = this.state.characters.filter(character => characters.id == id);
    this.setState({characters})
  };

  // Map over this.state.characters and render a characterCard component for each character object
  render() {
    return (
      <div className="wrapper">
      <Banner 
        guessed={this.state.guessed}
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}
      />
        {this.state.characters.map(character => (
          <CharacterCard
            id={character.id}
            key={character.id}
            image={character.image}
            onClick={this.handleClick}
          />
        ))}
      </div>
    );
  }
}

export default App;