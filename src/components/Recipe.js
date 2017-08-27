import React from 'react';
import Instructions from './Instructions';
import IngredientsList from './IngredientsList';

const Recipe = ({ name, ingredients, steps }) =>
    <section id={name.toLowerCase().replace(/ /g, "-")}>
        <h1>{name}</h1>
        <IngredientsList ingredients={ingredients} />
        <Instructions title="Cooking instructions" steps={steps} />
   </section>

export default Recipe;
