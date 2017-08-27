import React from 'react';
import PropTypes from 'prop-types';

class Ingredient extends React.Component {
  render() {
    const {name, amount, measurement} = this.props;
    return (
      <li>
        <span className="name">{name}: </span>
        <span className="amount">{amount} </span>
        <span className="measurement">{measurement}</span>
      </li>
    )
  }
}

Ingredient.propTypes = {
  amount: PropTypes.number,
  measurement: PropTypes.string,
  name: (props, propName) =>
    (typeof props[propName] !== 'string' ?
        new Error("Name must be string") :
        (props[propName].length < 1) ?
            new Error("Length is too small"):
            (props[propName].length > 20) ?
                new Error("Length is over 20 chars"):
                null)
}

export default Ingredient;
