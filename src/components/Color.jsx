import React from "react"
// import {Picker} from './'


const Color = (props) => {
    return (
        <div className = {props.color} onClick={() => props.selectColor(props.color)} />
    )
}

export default Color