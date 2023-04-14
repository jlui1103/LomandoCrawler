import Button from "./Button"
import Nodes from  "./Nodes"
import { useState } from 'react'
const Node = ({node}) =>{
    const [childVis, setChildVis] = useState(false)
    const hasChild = node.children ? true : false
    return(
        <p1>
            <p2>
            <Button style = {{backgroundColor: 'blue',  
            borderRadius: 50,
            border: 0,
            height: 100,
            width: 100,
            cursor: 'pointer' }}
            id = {node.id}
            title = {node.title}
            text = {node.text}
            />
            </p2>
            <p3>
                <Nodes data = {node.children}/>
            </p3>
        </p1>
    )
}
export default Node