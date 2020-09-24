import React from "react";

function Demo(props){
    console.log(props)
    return (
    <h1>Hello {props.name} Live in {props.city}</h1>
    )
}

export default Demo