import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './components/Menu';
import registerServiceWorker from './registerServiceWorker';
import data from './data/static_recipes';
import AddColorForm from './components_es6/AddColorForm';

window.React = React;
const logColor = (title, color) =>
  console.log(`New color: ${title}| ${color}`)
ReactDOM.render(
  <AddColorForm onNewColor={logColor} />,
  document.getElementById('colorpicker'));
ReactDOM.render(
  <Menu recipes={data} title="Delicious Recipes" />,
  document.getElementById('root'));

registerServiceWorker();
