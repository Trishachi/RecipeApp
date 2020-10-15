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

  // getRecipe = async (event) => {
  //   event.preventDefault();
  //   const recipeName = event.target.elements.recipeName.value;
  //   const api_call = await fetch(
  //     `https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${recipeName}&page=1`
  //   );
  //   const data = await api_call.json();
  //   this.setState({ recipes: data.recipes });
  //   console.log(this.state.recipes);
  // };

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

  // componentDidMount = () => {
  //   const json = localStorage.getItem("recipes");
  //   const recipes = JSON.parse(json);
  //   this.setState({ recipes });
  // };

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
      </div>
    );
  }
}

export default App;