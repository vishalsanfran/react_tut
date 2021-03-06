import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Menu from './components/Menu';
import registerServiceWorker from './registerServiceWorker';
//import data from './data/static_recipes';
//import AddColorForm from './components_es6/AddColorForm';
//import StarRating from './components_es6/StarRating'
import MemberList from './components_es6/MemberList'
//import App from './App'

window.React = React;
/*const logColor = (title, color) =>
  console.log(`New color: ${title}| ${color}`)

ReactDOM.render(
  <StarRating totalStars={6} starsSelected={3} />,
  document.getElementById('star-rating'));
ReactDOM.render(
  <AddColorForm onNewColor={logColor} />,
  document.getElementById('colorpicker'));
ReactDOM.render(
  <Menu recipes={data} title="Delicious Recipes" />,
  document.getElementById('root'));

ReactDOM.render(
  <App colors={[]} />,
  document.getElementById('root'));
*/
ReactDOM.render(
  <MemberList count={3} />,
  document.getElementById('root'));
registerServiceWorker();
