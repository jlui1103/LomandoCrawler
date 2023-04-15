import PropTypes from 'prop-types'
import Button from './Button'
import React, {useState} from 'react';
import Nodes from './Nodes'
const MainPanel = ({show, onShow,nodeName,setNode,data}) => {
  const onClick = (e)=> {
    if (e.target.className ==='btn'){
        console.log('c')
        setNode({node: e.target, id: e.target.id})
      } else{
        console.log('a')
        setNode({node: "Main", id: 0})
      }
    }  
    return(
    <main className="main" id = '0' onClick = {onClick} >
      <Nodes data = {data} onClick={onClick} id = "root"/>
    </main>
    )
    
}

export default MainPanel;
