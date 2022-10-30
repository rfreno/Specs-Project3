import React, { useState } from "react";
import RecipeCard from "../recipeComponent/RecipeCard";
import { ImSearch } from "react-icons/im";
import classes from "./HomeScreen.module.css";

const RecipeDisplay = ({ recipes }) => {
  // console.log('recipes',recipes)
  const [search, setSearch] = useState("");

  const recipesShown = recipes
    .filter((recipe) => {
      let name = recipe.recipe_name.toLowerCase();
      // console.log(name)
      let searched = search.toLowerCase();
      return name.includes(searched);
    })
    .map((recipe) => {
      return <RecipeCard recipe={recipe} />;
    });

  return (
    <div className={classes.main_content}>
      <span className={classes.searchbar}>
        <ImSearch color="#ff7803" />
        <input
          type="text"
          value={search}
          onChange={(evt) => setSearch(evt.target.value)}
          placeholder="Search recipes"
        />
      </span>
      {/* <RecipeCard /> */}
      <div className={classes.rec_container}>
        {recipesShown ? recipesShown : <h2>No Recipes to Display</h2>}
      </div>
    </div>
  );
};

export default RecipeDisplay;
