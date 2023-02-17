import './App.css';
import MainPanel from "./components/mainPanel";
import SidePanel from './components/sidePanel';
import { useState } from 'react'
import Button from './components/Button';
//import PrimaryLayout from './components/PrimaryLayout'
function App() {
  const [showNode,setShowNode] = useState(false)

  return (
    <div className="App">
      <m1 className = "main-layout">
        <m2 className = "panel main">
          <MainPanel showNode = {showNode} />
          
        </m2>
        <m3 className = "panel side">
          <SidePanel nodeClicked={showNode} node = {true} 
          title ={node.id}/>
        </m3>
      </m1> 
    </div>
  ); 
};

export default App;
