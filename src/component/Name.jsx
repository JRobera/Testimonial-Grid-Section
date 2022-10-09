import React from "react";

function Name(props){
    return <div className="name">
        <h2>{props.name}</h2>
        <p>{props.status}</p>
    </div>

}

export default Name;