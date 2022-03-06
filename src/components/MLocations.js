import React from 'react';
import { Link } from 'react-router-dom';

import bubble from '../assets/shared/desktop/bg-pattern-small-circle.svg';
import aus from '../assets/shared/desktop/illustration-australia.svg';
import can from '../assets/shared/desktop/illustration-canada.svg';
import uni from '../assets/shared/desktop/illustration-united-kingdom.svg';

export default function AboutLocations () {
    return(
        <section className="mar about-locations">
            <div className="elem-cont">
                <div className="img-cont">
                    <img src={can} alt="illustration of the skyline of Vancouver Canada"/>
                </div>
                <h3>canada</h3>
                <Link className="btn-dark" onClick={window.scrollTo(0, 0)} to="/location" exact="true">see location</Link>
            </div>
            <div className="elem-cont">
                <div className="img-cont">
                    <img src={aus} alt="illustration of the skyline of Sydney Australia"/>
                </div>
                <h3>australia</h3>
                <Link className="btn-dark" onClick={window.scrollTo(0, 0)} to="/location" exact="true">see location</Link>
            </div>
            <div className="elem-cont">
                <div className="img-cont">
                    <img src={uni} alt="illustration of the skyline of the Charles Bridge"/>
                </div>
                <h3>united kingdom</h3>
                <Link className="btn-dark" onClick={window.scrollTo(0, 0)} to="/location" exact="true">see location</Link>
            </div>
        </section>
    )
}