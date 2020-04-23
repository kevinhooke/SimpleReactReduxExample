import React, { Component } from 'react';
import './App.css';
import LabelComponent from './components/LabelComponent';
import FormComponent from './components/FormComponent';
import LabelStore from './stores/LabelStore';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LabelComponent/>
        <FormComponent label="Example Button"/>
      </div>
    );
  }
}

export default App;
