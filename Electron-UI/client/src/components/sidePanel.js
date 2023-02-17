import PropTypes from 'prop-types'
import Button from  './Button'
const SidePanel = ({nodeClicked,node,title}) => {
    return(
    <h1 className='Side'{...nodeClicked ? title = node.id: title = 'Welcome'} >
       {title}
    </h1>

    )
}
SidePanel.defaultProps = {
    title: ' Welcome'

    
}
SidePanel.propTypes = {
    title: PropTypes.string.isRequired,
}
export default SidePanel;