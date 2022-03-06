import React from 'react';

export default function PageHead (props) {
    return(
        <header className="design-head">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </header>
    )
}