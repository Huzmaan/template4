import React from 'react';
import './App.css'
import Main from './Components/Main/Logo';
import About from './Components/Main/About';
import Work from './Components/Main/Work';
import Resume from './Components/Main/Resume';
import Swing from './Components/Main/Swing';
import Contact from './Components/Main/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    
    <div className="app-css">
    <Main />
    <About/>
    </div>
    <div className="app-css">
    <Work></Work>
    <Resume></Resume>
    </div>
    <div className="app-css">
      <Swing></Swing>
      <Contact></Contact>
    </div>
    <div>
    <Footer></Footer>
    </div>
    
    </>
  );
}

export default App;
