import PropTypes from 'prop-types'
const Button = ({color,onClick,text}) => {
   
    return(
    <button  
    onClick={onClick}
    style = {{backgroundColor: color,  
        borderRadius: 50,
        border: 0,
        height: 100,
        width: 100}} 
    className='btn'>
    {text}
    </button>
    )
}
export default Button;