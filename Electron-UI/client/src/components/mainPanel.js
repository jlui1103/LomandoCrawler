import PropTypes from 'prop-types'
const mainPanel = () => {
    return(
    <mainPanel className="main" >
      hi
    </mainPanel>
    )
}

mainPanel.propTypes = {
    title: PropTypes.string.isRequired,
}
export default mainPanel;