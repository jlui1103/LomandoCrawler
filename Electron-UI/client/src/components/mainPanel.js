import PropTypes from 'prop-types'
import Button from './Button'
const MainPanel = (showNode) => {
    return(
    <mainPanel className="main" >
      <Button color = {'blue'} onClick = {showNode}/>
      
    </mainPanel>
    )
}

MainPanel.propTypes = {
    title: PropTypes.string.isRequired,
}
export default MainPanel;