import PropTypes from 'prop-types'
import Button from  './Button'
const SidePanel = ({node,title,onShow}) => {
    return(
       
    <side title = {node.id =="" ?  title= 'welcome': title = node.id }
    onShow = {onShow}
    className='Side' id = '2' >
    {title}
    </side>
   
    )
    }
export default SidePanel;