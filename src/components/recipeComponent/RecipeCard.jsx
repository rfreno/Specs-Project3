import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./RecipeCard.module.css";

const RecipeCard = (recipe) => {
  const nav = useNavigate()

  const handleClick = () => {
    nav(`/recipe/${recipe.recipe.recipe_id}`)
  }

  return (
    <div className={classes.rec_card}>
      <div className={classes.img_container}>
        <img src={recipe.recipe.image_url}></img>
      </div>
      <h3>{recipe.recipe.recipe_name}</h3>
      {/* <Link > */}
      <button onClick={handleClick}>See More</button>
      {/*</Link>*/}
    </div>
  );
};

export default RecipeCard;
