import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Recipes from "./components/Recipes";
import Data from "./assets/data.json";

// Constructor function is not required in React 16
class App extends Component {
  state = {
    recipes: [],
  };

  getRecipe = (event) => {
    event.preventDefault();
    const recipeName = event.target.elements.recipeName.value;
    var results = [];
    var searchField = "title";
    var searchVal = recipeName.toLowerCase();
    for (var i = 0; i < Data.recipes.length; i++) {
      if (Data.recipes[i][searchField].toLowerCase().includes(searchVal)) {
        results.push(Data.recipes[i]);
      }
    }
    this.setState({ recipes: results });
  };

  componentDidMount = () => {
    const recipes = Data.recipes;
    this.setState({ recipes });
  };

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Nigerian Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
        <footer>
          <p className="copyright font-italic">
            Copyright © 2020 | Chisom Trisha Okoye
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
