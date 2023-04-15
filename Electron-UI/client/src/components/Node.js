import Button from "./Button"
import Nodes from  "./Nodes"
import { useState } from 'react'
const Node = ({node, onClick}) =>{
    const [childVis, setChildVis] = useState(false)
    const hasChild = node.children ? true : false
    return(
            <p2>
            <Button
            id = {node.id}
            title = {node.title}
            text = {node.text}
            onClick={onClick}
            />
             <Nodes data = {node.children} onClick={onClick} id = "children"/>
            </p2>
               
    )
}
export default Node