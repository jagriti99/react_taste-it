import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import classes from "./AddNewRecipe.module.css";

const Addnewrecipie = () => {
  const [countries, setCountries] = useState([]);

  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      ingredients: [{ quantity: "", ingredient: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  const onSubmit = (d) => {
    alert(JSON.stringify(d));
    axios.post("http://localhost:3001/recipes", d).then((res) => {
     
    });
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      const countries = res.data.map((item) => {
        return {
          name: item.name,
          flagurl: item.flag,
        };
      });

      setCountries(countries);
    });
  }, []);
  return (
    <div className={classes.addnewrecipie}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Add new recipe</legend>
          <div className={classes.m_5}>
            <label htmlFor="name" className={classes.form_label}>
              {" "}
              Name{" "}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Recipe Name"
              className={classes.form_input}
              {...register("name")}
            />
          </div>

          <div className={classes.m_5}>
            <label htmlFor="author" className={classes.form_label}>
              {" "}
              Author{" "}
            </label>
            <input
              type="text"
              name="author"
              id="author"
              placeholder="author"
              className={classes.form_input}
              {...register("author")}
            />
          </div>

          <div className={classes.m_5}>
            <label htmlFor="country" className={classes.form_label}>
              {" "}
              Recipe is from:{" "}
            </label>
            <select
              id="country"
              name="country"
              {...register("countryFlagurl")}
              className={classes.form_input}
            >
              <option value="">--select country--</option>
              {countries.map((country) => (
                <option value={country.flagurl}>{country.name}</option>
              ))}
            </select>
          </div>

          <div className={classes.m_5}>
            <label htmlFor="description" className={classes.form_label}>
              {" "}
              Description{" "}
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Description of the recipe"
              className={classes.form_input}
              {...register("description")}
            />
          </div>

          <div className={classes.m_5}>
            <label htmlFor="image" className={classes.form_label}>
              {" "}
              Image{" "}
            </label>
            <input
              type="text"
              name="image"
              id="image"
              placeholder="image"
              className={classes.form_input}
              {...register("image")}
            />
          </div>

          <div className={classes.m_5}>
            <label className={classes.form_label} htmlFor="Ingredients"> </label>
            {fields.map((item, index) => {
              return (
                <div key={item.id} className={classes.ingredient}>
                  <div className={classes.ingredient_quantity}>
                    <label
                      htmlFor={`quantity-${item.id}`}
                      className={classes.form_label}>
                      {" "}
                      Quantity{" "}
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      id="quantity"
                      placeholder="Quantity"
                      className={classes.form_input}
                      {...register(`ingredients.${index}.quantity`)}
                    />
                  </div>

                  <div className={classes.ingredient_ingredient}>
                    <label
                      htmlFor={`ingredient-${item.id}`}
                      className={classes.form_label}
                    >
                      {" "}
                      Ingredient{" "}
                    </label>
                    <input
                      type="text"
                      name="ingredient"
                      id="ingredient"
                      placeholder="Ingredient"
                      className={classes.form_input}
                      {...register(`ingredients.${index}.ingredient`)}
                    />
                  </div>
                  <div className={classes.ingredient_button}>
                    <button
                      className={classes.ingredient_button_btn}
                      type="button"
                      onClick={() => remove(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
            <section>
              <button
                type="button"
                className={classes.ingredient_button_btn}
                onClick={() => {
                  append({ quantity: "", ingredient: "" });
                }}>Add more</button>
            </section>
          </div>

          <div className={classes.m_5}>
            <label htmlFor="instructions" className={classes.form_label}>
              {" "}
              Instructions{" "}
            </label>
            <textarea
              id="instructions"
              name="instructions"
              placeholder="instructions of the recipe"
              className={classes.form_input}
              {...register("instructions")}
            />
          </div>

          <div className={classes.form_button}>
            <button className={classes.btn} type="submit">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Addnewrecipie;
