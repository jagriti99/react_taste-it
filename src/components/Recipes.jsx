import React, { useEffect } from "react";
import { useState } from "react";

import axios from "axios";

import Recipe from "./Recipe";

import classes from "./Recipes.module.css";

const Recipes = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/recipes").then((res) => {
      setData(res.data);
    });
  }, []);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchedNameFilter = data.filter((item) => {
    return item.name.toLowerCase().includes(search);
  });

  return (
    <>
      <div className={classes.search}>
        <input
          type="search"
          onChange={searchHandler}
          placeholder="Search"
          className={classes.form_input}
        />
      </div>
      <div className={classes.receipes}>
        {searchedNameFilter.length > 0 ? (
          searchedNameFilter.map((recipe) => {
            return (
              <Recipe
                key={recipe.id}
                id={recipe.id}
                imageUrl={recipe.image}
                name={recipe.name}
                countryFlagurl={recipe.countryFlagurl}
              />
            );
          })
        ) : (
          <p>No recipe found with searched word</p>
        )}
      </div>
    </>
  );
};

export default Recipes;