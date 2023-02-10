import './App.css';
//import mainPanel from "./components/mainPanel";
//import sidePanel from './components/sidePanel';
import { useState } from 'react'
import PrimaryLayout from './components/PrimaryLayout'

function App() {
  
  return (
    <div className="App">
      <m1 className = "main-layout">
        <m2 className = "panel main">
          main
        </m2>
        <m3 className = "panel side">
          side
        </m3>
      </m1> 
    </div>
  ); 
};

export default App;
