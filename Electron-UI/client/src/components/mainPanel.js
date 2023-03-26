import PropTypes from 'prop-types'
import Button from './Button'
import SidePanel from './sidePanel'
const MainPanel = ({show, onShow,nodeName,setNode}) => {
  document.addEventListener("mousedown",(e)=>{
    if (e.target.className ==='panel main'|| e.target.className ==='main'){  
        console.log('a')
        setNode({node: "Main", id: 0})
      }else if (e.target.className ==='panel side'){
        console.log('b')
      } else if (e.target.className ==='btn'){
        console.log('c')
        setNode({node: e.target, id: e.target.id})
      }
  });
    return(
    <main className="main" id = '0'  >
      <Button  text = {show ===true ? "True" : "False"} id = '1' /> 
      <Button  text = {show ===true ? "True" : "False"} id = '2'/> 
    </main>
    )

}

export default MainPanel;


//onClick = {() => setNode({node: this, id:'main'})}