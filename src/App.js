    import React, { Component } from 'react';
    import logo from './logo.svg';
    import './App.css';
     
    class App extends Component {
      render() {
        return (
          <div className="App">
            <h1 className="hello">Hello World</h1>
            <FirstComponent></FirstComponent>
            <SecondComponent></SecondComponent>
            <ThirdComponent></ThirdComponent>
          </div>
        );
      }
    }

    class FirstComponent extends Component {
      render() {
        return (
          <div className="firstComponent">
            First Component
          </div>
        );
      }
    }

    class SecondComponent extends Component {
      render() {
        return (
          <div className="secondComponent">
            Second Component
          </div>
        );
      }
    }

    function ThirdComponent() {
      return (
        <div className="thirdComponent">
          Third Component
        </div>
      );
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