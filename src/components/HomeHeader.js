import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeHeader () {
    return(
        <section className="home-head">
            <div className="text-cont">
                <h2>Award-winning custom designs and digital branding solutions</h2>
                <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                <Link className="btn-light" onClick={window.scrollTo(0, 0)} to="/about" exact="true">learn more</Link>
            </div>
        </section>
    )
}