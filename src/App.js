import React from 'react';
import './App.css'
import Main from './Components/Main/Logo';
import About from './Components/Main/About';
import Work from './Components/Main/Work';
import Resume from './Components/Main/Resume';
import Swing from './Components/Main/Swing';


function App() {
  return (
    <>
    <div className="app-css">
    <Main></Main>
    <About></About>
    </div>
    <div className="app-css1">
    <Work></Work>
    <Resume></Resume>
    </div>
    <div className="app-css2">
      <Swing></Swing>
    </div>
    </>
  );
}

export default App;
