import React from 'react';
import Instructions from './Instructions';

const Recipe = ({ name, ingredients, steps }) =>
    <section id={name.toLowerCase().replace(/ /g, "-")}>
        <h1>{name}</h1>
        <ul className="ingredients">
            {ingredients.map((ingredient, i) =>
                <li key={i}>{ingredient.name}</li>
            )}
        </ul>
        <Instructions title="Cooking instructions" steps={steps} />
   </section>

const Menu = ({ title, recipes }) =>
    <article>
        <header>
            <h1>{title}</h1>
        </header>
        <div className="recipes">
            {recipes.map((recipe, i) =>
                <Recipe key={i} {...recipe} />
            )}
        </div>
    </article>

export default Menu;
