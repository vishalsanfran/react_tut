import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './components/Menu';
import registerServiceWorker from './registerServiceWorker';
import data from './data/static_recipes';

window.React = React;
ReactDOM.render(
  <Menu recipes={data} title="Delicious Recipes" />,
  document.getElementById('root'));
registerServiceWorker();
