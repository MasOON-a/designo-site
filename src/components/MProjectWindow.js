import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectWindow (props) {
    return(
        <div className="window" key={props.itemKey}>
            <div className="img-cont">
                <img src={props.src} alt={props.alt}></img>
            </div>
            <div className="text-cont">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}