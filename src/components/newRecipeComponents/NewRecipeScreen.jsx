import React, { useState } from "react";
import classes from "./NewRecipe.module.css";
import { Formik } from "formik";
import axios from "axios";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = (values, {resetForm}) => {
    values.ingredients = ingredients;
    console.log(values);
    resetForm({values:''})
    axios
    .post(`https://recipes.devmountain.com/recipes`, values)
    
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName('');
    setQuantity('');
  };

  const showIngredients = ingredients.map(item => {
    return (
      <li>
        {item.quantity} {item.name}
      </li>
    )
  })

  return (
    <section>
      <h1>Tell us about your recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit, handleReset }) => (
          <form onSubmit={handleSubmit} onReset={handleReset}>
            <div className={classes.inputs}>
              <input
                type="text"
                placeholder="Recipe Name"
                name="recipeName"
                value={values.recipeName}
                onChange={handleChange}
              ></input>
              <input
                placeholder="Image URL"
                value={values.imageURL}
                onChange={handleChange}
                name="imageURL"
              />
            </div>

            <div className={classes.type_selection}>
              <span>
                <input
                  type="radio"
                  value="Cook"
                  name="type"
                  onChange={handleChange}
                ></input>
                <p>Cook</p>
              </span>
              <span>
                <input
                  type="radio"
                  value="Bake"
                  name="type"
                  onChange={handleChange}
                ></input>
                <p>Bake</p>
              </span>
              <span>
                <input
                  type="radio"
                  value="Drink"
                  name="type"
                  onChange={handleChange}
                ></input>
                <p>Drink</p>
              </span>
            </div>

            <div className={classes.inputs}>
              <input
                type="text"
                placeholder="Prep Time"
                name="prepTime"
                value={values.prepTime}
                onChange={handleChange}
              ></input>
              <input
                type="text"
                placeholder="Cook Time"
                name="cookTime"
                value={values.cookTime}
                onChange={handleChange}
              ></input>
              <input
                type="text"
                placeholder="Serves"
                name="serves"
                value={values.serves}
                onChange={handleChange}
              ></input>
            </div>

          <div className={classes.inputs}>
            <div className={classes.ingredients}>
              <input
                type="text"
                placeholder="Ingredient"
                name="ingredient"
                onChange={(evt) => setName(evt.target.value)}
              ></input>
              <input
                type="text"
                placeholder="Quantity"
                name="quantity"
                onChange={(evt) => setQuantity(evt.target.value)}
              ></input>
            </div>
            <ul>{showIngredients}</ul>
            </div>


            <button type="button" onClick={addIngredient} className={classes.orange}>
              Add Ingredient
            </button>

            <textarea
              placeholder="What are the instructions?"
              name="instructions"
              rows={6}
              value={values.instructions}
              onChange={handleChange}
            />
            <button type="submit">Save</button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
