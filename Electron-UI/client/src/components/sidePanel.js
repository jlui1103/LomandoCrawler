import PropTypes from 'prop-types'
import Button from  './Button'
const SidePanel = ({node,title,onShow}) => {
    return(
       
    <side title = {node.id =="0" ?  title= 'welcome': title = node.id }
    onShow = {onShow}
    className='Side'>
    {title}
        <p >
            {title == 'welcome' ? "Instruction\nPlease Click on a Node see the options the node has" : title = "Options"}
        </p>
    </side>
   
    )
    }
export default SidePanel;