import React, { Component } from 'react';
import logo from './logo.svg';
import FirstComponent from './components/learning/FirstComponent'
import SecondComponent from './components/learning/SecondComponent'
import ThirdComponent from './components/learning/ThirdComponent'
import Counter from './components/counter/Counter'

import './App.css';
    
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter></Counter>
      </div>
        );
      }
  }

  class LearningComponent extends Component {
  render() {
    return (
      <div className="LearningComponent">
         <h1 className="hello">Hello World</h1>
             <FirstComponent></FirstComponent>
            <SecondComponent></SecondComponent>
            <ThirdComponent></ThirdComponent>
      </div>
        );
      }
  }

export default App;

    /*
    <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload...
            </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React With Me
            </a>
            </header>
    */