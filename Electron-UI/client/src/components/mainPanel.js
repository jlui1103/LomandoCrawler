import PropTypes from 'prop-types'
import Button from './Button'
import React, {useState} from 'react';
import Nodes from './Nodes'

// const Tree = dynamic(() => import("react-d3-tree"),{
//   srr: false,
// });
const MainPanel = ({show, onShow,nodeName,setNode,data}) => {
  document.addEventListener("click",(e)=>{
  if (e.target.className ==='panel side'){
      console.log('b')
    } else if (e.target.className ==='btn'){
      console.log('c')
      setNode({node: e.target, id: e.target.id})
    } else {
      console.log('a')
      setNode({node: "Main", id: 0})
    }
   
})
    return(
    <main className="main" id = '0'  >
      <Nodes data = {data}/>
    </main>
    )
    
}

export default MainPanel;

//onClick = {() => setNode({node: this, id:'main'})}