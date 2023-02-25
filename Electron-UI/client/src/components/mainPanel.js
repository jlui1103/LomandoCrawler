import PropTypes from 'prop-types'
import Button from './Button'
const MainPanel = (showNode, onClick) => {
    return(
    <main className="main" >
      <Button color = {showNode ? 'blue' :'red'}  text = {showNode ? "True" : "False"} onClick = {onClick}/>
      
    </main>
    )
}

MainPanel.propTypes = {
    title: PropTypes.string.isRequired,
  
}
export default MainPanel;