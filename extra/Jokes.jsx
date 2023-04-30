import React from "react"
import ReactDOM  from "react/clients"

export default function Jokes(props) {
    return (
        <div>
            <h1>{props.setup}</h1>
            <p>{props.punchline}</p>
            <hr />
        </div>
        
    )
}