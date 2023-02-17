import PropTypes from 'prop-types'
const Button = ({color,onClick}) => {
    return(
    <button  
    onClick={onClick}
    style = {{backgroundColor: color, 
        borderRadius: 50,
        border: 0,
        height: 50,
        width: 50}} 
    className='btn'>
    </button>
    )
}
export default Button;