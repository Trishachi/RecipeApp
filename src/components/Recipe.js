import React from "react";

import { Link } from "react-router-dom";

class Recipe extends React.Component {
  state = {
    activeRecipe: [],
  };

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(
      `https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${title}`
      // `src/assets/data.json`
    );
    const res = await req.json();

    this.setState({ activeRecipe: res.recipes[0] });
    console.log(this.state.activeRecipe);
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
                  Publisher: <span>{recipe.publisher}</span>
                </h4>
                <p className="active-recipe__website">
                  Website:{" "}
                  <span>
                    <a href={recipe.publisher_url}>recipe.publisher_url</a>
                  </span>
                </p>
                {/* <p>{recipe.image_url}</p>
                <p>{recipe.source_url}</p>
                <p>{recipe.social_rank}</p> */}
                <button className="active-recipe__button">
                  <Link to="/">Go Home</Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
