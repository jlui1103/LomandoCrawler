import PropTypes from 'prop-types'
import Button from './Button'
const MainPanel = ({show, onShow}) => {
    return(
    <main className="main" >
      
      <Button  text = {show ==true ? "True" : "False"} onClick = {onShow}/> 
      <Button  text = {show ==true ? "True" : "False"} onClick = {onShow}/> 
    </main>
    )
}
const test = document.querySelectorAll(".main");
document.addEventListener("mousedown",(e)=>{
    console.log(e.target.className)
    console.log(test)
    if (e.target.className =='panel main') {  
        console.log("Clicked Inside");
        toggleNode()
      } else {
        console.log("Clicked Outside / Elsewhere");
      }
});
export default MainPanel;