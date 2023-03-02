import PropTypes from 'prop-types'
const Button = ({onClick,text}) => {
    return(
    <button  
    onClick={onClick}
    style = {{backgroundColor: 'blue',  
        borderRadius: 50,
        border: 0,
        height: 100,
        width: 100,
        cursor: 'pointer' }} 
    
    className='btn'>

    {text}
    </button>
    )
}

export default Button;