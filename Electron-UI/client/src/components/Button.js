import PropTypes from 'prop-types'
import React, {useState} from 'react';
const Button = ({onClick,text,title,id}) => {
    const [visited,setVisited] = useState(false)
    return(
    <button  
    id= {id}
    title = {title}
    onClick={onClick}
        style = {{backgroundColor: onClick & visited ? "blue": "red",  
        borderRadius: 50,
        border: 0,
        height: 100,
        width: 100,
        cursor: 'pointer' }} 
    
    className='btn'>
    {title}
    {text}
   
    </button>
    )
}

export default Button;