import React from "react";
import { Link } from "react-router-dom";
import Data from "../assets/data.json";

class Recipe extends React.Component {
  state = {
    activeRecipe: [],
  };

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    var result = [];
    var searchField = "title";
    var searchVal = title.toLowerCase();
    for (var i = 0; i < Data.recipes.length; i++) {
      if (Data.recipes[i][searchField].toLowerCase() === searchVal) {
        result.push(Data.recipes[i]);
      }
    }
    this.setState({ activeRecipe: result[0] });
  };

  getIngredients = (arr) => {
    return arr.join(", ");
  };

  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className="container">
        {this.state.activeRecipe.length !== 0 && (
          <div className="active-recipe">
            <div className="row">
              <div className="col-md-6">
                <img
                  className="active-recipe__img"
                  src={recipe.image_url}
                  alt={recipe.title}
                />
              </div>
              <div className="col-md-6">
                <h3 className="active-recipe__title">{recipe.title}</h3>
                <h4 className="active-recipe__publisher">
                  By:{" "}
                  <span>
                    <strong>{recipe.publisher}</strong>
                  </span>
                </h4>
                <p className="active-recipe__description">
                  Description:{" "}
                  <span>
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras condimentum, lorem et convallis pellentesque, leo lorem
                    pretium nulla, ac commodo mi quam sed massa. Nam et lorem
                    convallis, dignissim arcu vel, placerat nulla. */}
                    {recipe.description}
                  </span>
                </p>
                <p className="active-recipe__Ingredients">
                  Ingredients:{" "}
                  <span>{this.getIngredients(recipe.ingredients)}</span>
                </p>
                <p className="active-recipe__website">
                  Website:{" "}
                  <span>
                    <a href={recipe.source_url} target="_blank">
                      View Source
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 active-recipe__video">
                <div className="">
                  <h4>Video Instructions</h4>
                  <p>
                    Below is a video altenative of the {recipe.title} recipe if
                    you prefer to learn by wacthing videos rather than reading.{" "}
                  </p>
                  <iframe
                    width="560"
                    height="315"
                    src={recipe.video_directions}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="video"
                  ></iframe>
                  <button className="active-recipe__button">
                    <Link to="/">Go Home</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <footer>
          <div className="row">
            <p className="copyright font-italic recipe-footer">
              Copyright © 2020 | Chisom Trisha Okoye
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Recipe;
