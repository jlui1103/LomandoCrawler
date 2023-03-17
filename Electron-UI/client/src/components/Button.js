import PropTypes from 'prop-types'
const Button = ({onClick,text,title,id}) => {
    return(
    <button  
    id= {id}
    title = {title}
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