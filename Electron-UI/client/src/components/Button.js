import PropTypes from 'prop-types'
import React, {useState} from 'react';
const Button = ({onClick,text,title,id}) => {
    const [visited,setVisited] = useState(false)
    const isVisited = () => {
        setVisited(true)
    }
    return(
    <button  
    id= {id}
    title = {title}
    onClick={isVisited}
        style = {{backgroundColor: visited? "blue": "red",  
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