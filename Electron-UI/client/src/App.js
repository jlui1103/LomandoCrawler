import './App.css';
import MainPanel from "./components/mainPanel";
import SidePanel from './components/sidePanel';
import { useState } from 'react'
import Button from './components/Button';
//import PrimaryLayout from './components/PrimaryLayout'

function App() {
  const [showNode,setShowNode] = useState(false)
  const [node, setNode] = useState({
    node: "Main",
    id: "0"
  }
  )
  const tempData = [
    {
      id: "1",
      title: "Hello",
      children: [
        {
        id: "2",
        title: "World",
        children: [
          {
          id: "4",
          title:"Temp",
          children: []
        }]
      },{
        id: "3",
        title: "Test",
        children: [{
          id: "5",
          title: "Time",
          children: []
        }]
      }
    ]
  }]
  // const changeNode = (node) =>{
  //   if (setNode != null){
  //      setNode(node)
  //    }
  //  }
  const toggleNode = () => 
  {
    setShowNode(!showNode)
  }
 

  return (
    <div className="App">
      <m1 className = "main-layout">
        <m2 className = "panel main" id = '0'>
          <MainPanel onShow = {toggleNode}
          show = {showNode}
          id = '0'
          setNode = {setNode}
          data = {tempData}
            />
        </m2>
        <m3 className = "panel side">
         <SidePanel 
         onShow = {toggleNode}
         node = {node}
         />
        </m3>
      </m1> 
    </div>
  ); 
};

export default App;
