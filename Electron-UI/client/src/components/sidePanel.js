import PropTypes from 'prop-types'
import Button from  './Button'
const SidePanel = ({node,title,onShow}) => {
    return(
       
    <side title = {node.id =="0" ?  title= 'welcome': title = node.id }
    onShow = {onShow}
    className='Side'>
    {title}
    </side>
   
    )
    }
export default SidePanel;