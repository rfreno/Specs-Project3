import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RecipeImage from "./RecipeImage";
import classes from './DetailScreen.module.css'


const DetailScreen = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
      setRecipe(res.data);
    });
  }, []);


  return (
    <div>
      <RecipeImage image={recipe.image_url} name={recipe.recipe_name}/>
      <div className={classes.details}>
        <div className={classes.left_container}>
          <h2>Recipe</h2><br></br>
          <h4>Prep Time: {recipe.prep_time}</h4>
          <h4>Cook Time: {recipe.cook_time}</h4>
          <h4>Serves: {recipe.serves}</h4>
          <br />
          <h2>Ingredients</h2><br></br>
          {recipe.ingredients && recipe.ingredients.map(item => {
            return <p>{item.quantity} {item.ingredient}</p>
          })}
        </div>
        <div className={classes.right_container}>
          <h2>Instructions</h2><br></br>
          <p>{recipe.instructions && JSON.parse(recipe.instructions)}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;
