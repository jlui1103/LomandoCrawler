import React from 'react';

const Tree = ({data = []}) =>{
    return(
        <div className='d-tree'>
            <ul className='d-flex'>
                {data.map(tree =>(
                    <Node node = {tree}/>
                ))}
            </ul>
        </div>
    )
}
export default Tree;