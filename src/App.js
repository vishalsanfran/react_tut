import React, {Component} from 'react';
import {v4} from 'uuid';
import AddColorForm from './components_es6/AddColorForm'
import ColorList from './components/ColorList'

class App extends React {
  constructor(props) {
    super(props)
    this.state = {
      colors: []
    }
  }
  render() {
    const {addColor} = this;
    const {colors} = this.state;
    return (
      <div className="app">
        <AddColorForm onNewColor={addColor} />
        <ColorList colors={colors}>
      </div>
    )
  }
}
