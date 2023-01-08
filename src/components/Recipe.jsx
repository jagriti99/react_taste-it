import * as React from "react";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import classes from "./Recipe.module.css";

export default function Recipe({ id, imageUrl, name, countryFlagurl }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/recipes/${id}`);
  }

  return (
    <Card sx={{ width: 345, position: "relative", padding: "1rem" }}>
      <img
        className={classes.flag}
        alt="recipeCountryFlag"
        src={countryFlagurl}
      ></img>
      <CardMedia sx={{ height: 140 }} image={imageUrl} title="green iguana" />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>
          See more
        </Button>
      </CardActions>
    </Card>
  );
}