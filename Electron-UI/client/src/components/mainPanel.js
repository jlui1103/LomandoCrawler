import PropTypes from 'prop-types'
import Button from './Button'
import SidePanel from './sidePanel'
const MainPanel = ({show, onShow}) => {
    return(
    <main className="main" id = '0'>
      
      <Button  text = {show ==true ? "True" : "False"} onClick = {onShow} id = '1'/> 
      <Button  text = {show ==true ? "True" : "False"} onClick = {onShow} id = '2'/> 
    </main>
    )
}
const test = document.querySelectorAll(".main");
document.addEventListener("mousedown",(e)=>{
    if (e.target.className =='panel main'|| e.target.className =='main') {  
        
        MainPanel.node = e.target
        MainPanel.id = e.target.id
        console.log(e.target.id)
        return MainPanel
      }else if (e.target.className =='panel side'){
        //console.log(MainPanel.id);
        //console.log(MainPanel.node)
      } else if (e.target.className =='btn'){
        //console.log(e.target.id);
        MainPanel.id = e.target.id
        MainPanel.node = e.target
        return MainPanel
        

      }
});
export default MainPanel;