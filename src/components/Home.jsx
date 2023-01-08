import React from 'react';
import Button from './Button';
import { NavLink } from 'react-router-dom';
import classes from './Home.module.css'


const Home = () => {
    return (
        <div>
            <div className={classes.image}></div>
            
            <div className={classes.heropanel_content}>
                <h1>Taste-It</h1>
                <p>Explore and add recipes</p>
                <button><NavLink to="/recipes">Browse recipes</NavLink></button>
            </div>
            <h2>Want to try something new?</h2>
            <div className={classes.buttons}>
                <Button
                    title="Browse Recipes"
                    description="Search recipes by name or country."
                    linkText="All recipes"
                    link="/recipes"
                />
                <Button
                    title="Add recipes"
                    description="Want to add your own recipe? No worries, add on!"
                    linkText="Add a recipe"
                    link="/addNewRecipe"
                />
                <Button
                    title="Know more about the projects?"
                    description="Visit our programme homepage."
                    linkText="Business College Helsinki hompage"
                    link="https://www.bc.fi/"
                />
            </div>
        </div>
    );
};

export default Home;