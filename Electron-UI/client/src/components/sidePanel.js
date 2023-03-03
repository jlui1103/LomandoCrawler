import PropTypes from 'prop-types'
import Button from  './Button'
const SidePanel = ({node,nodeName}) => {

      const nodeSelect = () => {
        if(node != null){
          return true
        }
      }
    return(
    <side nodeNamed = {nodeName? nodeName = nodeName : nodeName= 'welcome'}
    className='Side'>
    {nodeName}
    </side>
   
    )
    }


export default SidePanel;