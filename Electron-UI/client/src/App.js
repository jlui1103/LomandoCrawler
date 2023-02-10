import './App.css';
import main from "./components/mainPanel";
import side from './components/sidePanel';
import { useState } from 'react'
import PrimaryLayout from './components/PrimaryLayout'

function App() {
  const [showNode,setShowNode] = useState(false)

  return (
    <div className="App">
      <m1 className = "main-layout">
        <m2 className = "panel main">
          main
        </m2>
        <m3 className = "panel side">
          
          <side showDescription = {()=> setShowNode(!showNode)}
          showNode = {showNode}/>
        </m3>
      </m1> 
    </div>
  ); 
};

export default App;
