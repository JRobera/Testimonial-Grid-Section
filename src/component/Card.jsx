import React from "react";
import Avatar from "./Avatar";
import Header from "./Header";
import Name from "./Name";
import Testimonials from "./Testimonials";

function Card(props){
    return (
    <div className="card">
        <div>
            <Avatar avatar={props.avatar} />
            <Name name={props.name} status={props.status} />
        </div>
        <Header header={props.header} />
        <Testimonials testimonials={props.testimonials} />
    </div>);
}

export default Card;