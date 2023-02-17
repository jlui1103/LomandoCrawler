import PropTypes from 'prop-types'
import Button from './Button'
const MainPanel = (showNode, onClick) => {
    return(
    <mainPanel className="main" >
      <Button color = {showNode ? 'blue' :'red'} onClick = {onClick} text = {showNode ? "True" : "False"}/>
      
    </mainPanel>
    )
}

MainPanel.propTypes = {
    title: PropTypes.string.isRequired,
}
export default MainPanel;