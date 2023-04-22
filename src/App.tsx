import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";

const App=()=> {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
      app
    </div>
  );
}

export default App;
