import React from "react";

import { NavLink } from "react-router-dom";
import classes from "./Home.module.css";
import food from "./Images/food.mp4";

const Home = () => {
  return (
    <div className={classes.video_container}>
      <video className={classes.video} autoPlay loop muted>
        <source src={food} type="video/mp4"></source>
      </video>
      <div className={classes.heading}>
        <h2>Want to try something new?</h2>
        <h1>Taste-It</h1>
        <p>Explore and add recipes</p>
        <button className={classes.btn}>
          <NavLink to="Recipes">Browse Recipes</NavLink>
        </button>
      </div>

      <div className={classes.container}>
        <div className={classes.moreDetails}>
          <h3>Browse recipe</h3>
          <p>"Search recipes by name or country."</p>
          <NavLink to="/recipes">All recipes</NavLink>
        </div>

        <div className={classes.moreDetails}>
          <h3>Add recipes</h3>
          <p>"Want to add your own recipe? No worries, add on!"</p>
          <NavLink to="/addNewRecipe">All recipes</NavLink>
        </div>

        <div className={classes.moreDetails}>
          <h3>Browse recipe</h3>
          <p>"Search recipes by name or country."</p>
          <a href="https://www.bc.fi" target="_blank" rel="noreferrer">
            Business College Helsinki hompage
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
