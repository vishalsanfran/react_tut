import React from 'react';
import PropTypes from 'prop-types';

const Ingredient = ({name, amount, measurement}) =>
<li>
  <span className="name">{name}: </span>
  <span className="amount">{amount} </span>
  <span className="measurement">{measurement}</span>
</li>

Ingredient.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  measurement: PropTypes.string.isRequired
}

Ingredient.defaultProps = {
  amount: 1,
  measurement: ""
}

export default Ingredient;
