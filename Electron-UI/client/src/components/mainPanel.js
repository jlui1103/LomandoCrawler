import PropTypes from 'prop-types'
import Button from './Button'
import SidePanel from './sidePanel'
const MainPanel = ({show, onShow,node,nodeName,setNode}) => {


    return(
    <main className="main" id = '0' >
      <Button  text = {show ===true ? "True" : "False"} onClick = {() => setNode({node: "a", id:'1'})} id = '1' /> 
      <Button  text = {show ===true ? "True" : "False"} onClick = {() => setNode({node: "a", id:'2'})} id = '2'/> 
    </main>
    )
}

export default MainPanel;
document.addEventListener("mousedown",(e)=>{
  if (e.target.className ==='panel main'|| e.target.className ==='main'){  
      MainPanel.setNode({node: null, id: '0'})
    }else if (e.target.className ==='panel side'){
      console.log('a')
      console.log('a')
    } else if (e.target.className ==='btn'){
      //console.log(e.target.id);
      MainPanel.setNode= e.target
      MainPanel.setName = e.target.id
    }
  });