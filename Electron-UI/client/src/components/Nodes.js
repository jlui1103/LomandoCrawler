import React from 'react';
import Node from './Node'
const Tree = ({data = [], onClick}) =>{
    return(
        <div className='d-tree'>
            <ul className='d-flex'>
                {data.map(tree =>(
                    <Node node = {tree} onClick={onClick} />
                ))}
            </ul>
        </div>
    )
}
export default Tree;