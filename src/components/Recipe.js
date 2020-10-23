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
                  By: <span>{recipe.publisher}</span>
                </h4>
                <p className="active-recipe__website">
                  Website:{" "}
                  <span>
                    <a href={recipe.publisher_url}>View Source</a>
                  </span>
                </p>
                {/* <p>{recipe.image_url}</p>
                <p>{recipe.source_url}</p>
                <p>{recipe.social_rank}</p> */}
                <button className="active-recipe__button">
                  <Link to="/">Go Home</Link>
                </button>
              </div>
              <div className="row">
                <div className="col-md-12 ">
                  <div className="active-recipe__video">
                    <p>Video Content</p>

                    <iframe
                      width="560"
                      height="315"
                      src={recipe.video_directions}
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      title="video"
                    ></iframe>
                  </div>
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
