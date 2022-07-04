import React from "react";
import './style.css'

const date = new Date();
const dateFormated = date.toLocaleDateString()

export function HelloWorld(props) {
    return (
        <div className="content" >
            <h2 style={{color: props.color, textDecoration:props.textDecoration }}>{props.text}</h2>
            <span className="date">{dateFormated}</span>
        </div>
    )
}