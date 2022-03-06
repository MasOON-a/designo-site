import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../assets/shared/desktop/icon-right-arrow.svg';

export default function DesignLinks (props) {
    return(
        <Link className="design-link" to={props.to} onClick={window.scrollTo(0, 0)} exact="true">
            <div className={'link-background ' + props.img}>
                <h2>{props.title}</h2>
                <p>view project<img src={arrow} alt="orange arrow"/></p>
            </div>
        </Link>
    )
}