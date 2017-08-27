import React from 'react';
//import Ingredient from './Ingredient';
import Ingredient from '../components_es6/Ingredient';

const IngredientsList = ({ingredients}) =>
<ul className="ingredients">
  {ingredients.map((ingredient, idx) =>
    <Ingredient key={idx} {...ingredient} />
  )}
</ul>

export default IngredientsList;
