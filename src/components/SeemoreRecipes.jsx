import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import classes from "./SeemoreRecipes.module.css";

const SeemoreRecipes = () => {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/recipes/${id}`).then((res) => {
      setRecipeDetails(res.data);
    });
  }, [id]);

  return (
    <>
      <h1 className={classes.recipeName}>{recipeDetails.name}</h1>
      <div className={classes.details}>
        <div className={classes.images}>
          <img
            src={recipeDetails.image}
            className={classes.details_item}
            alt="recipeImage"
          />
          <img
            src={recipeDetails.countryFlagurl}
            className={classes.flag}
            alt="recipeCountryFlag"
          />
        </div>
        <div className={classes.details_item}>
          <p className={classes.heading}>{recipeDetails.description}</p>
          <h3> by {recipeDetails.author}</h3>
        </div>
      </div>
      <div className={classes.details}>
        <div className={classes.details_item}>
          <h4 className={classes.heading}>Ingradients:</h4>
          {recipeDetails.ingredients &&
            recipeDetails.ingredients.map((ingred, index) => {
              return (
                <div className={classes.ingredient} key={index}>
                  {ingred.quantity} - {ingred.ingredient}
                </div>
              );
            })}
        </div>
        <div className={classes.details_item}>
          <h4 className={classes.heading}>Instructions:</h4>
          <p>{recipeDetails.instructions}</p>
        </div>
      </div>
    </>
  );
};

export default SeemoreRecipes;