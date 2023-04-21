import PropTypes from 'prop-types'
import Button from  './Button'
import Node from './Node'
const SidePanel = ({node,title,onShow,onClick}) => {
    const showText =(node) =>{
       
        return node.title
      }
    return(
    <side title = {node.id =="0" ?  title= 'welcome': title = node.id}
    onShow = {onShow}
    onClick = {onClick}
    className='side'>
    {title}
        <p>
            {title == 'welcome' ? <span>Instruction<br/>Please Click on a Node see the options the node has</span> : title = "Options"}
        </p>
    </side>
   
    )
    }
export default SidePanel;