import PropTypes from 'prop-types'
const sidePanel = ({showNode}) => {
    return(
    <side className='side'>
        Welcome
    </side>

    )
}
sidePanel.defaultProps = {
    title: ' Welcome'
}
sidePanel.propTypes = {
    title: PropTypes.string.isRequired,
}
export default sidePanel;