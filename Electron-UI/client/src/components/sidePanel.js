import PropTypes from 'prop-types'
const sidePanel = () => {
    return(
    <h1 className='side'>
        hi
    </h1>

    )
}
sidePanel.defaultProps = {
    title: 'Side Panel',
}
sidePanel.propTypes = {
    title: PropTypes.string.isRequired,
}
export default sidePanel;