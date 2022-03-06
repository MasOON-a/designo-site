import React from 'react';
import hero from '../assets/about/desktop/image-about-hero.jpg';
import heroTab from '../assets/about/tablet/image-about-hero.jpg';

export default function AboutHead () {
    return(
        <section className="about-head">
            <div className="text-cont">
                <h2>About Us</h2>
                <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
            </div>
            <picture className="img-cont">
                <source srcSet={hero} media='(max-width: 600px)'></source>
                <source srcSet={heroTab} media='(max-width: 1100px)'></source>
                <img src={hero} alt='top view of people working around a table with laptops and devices'/>
            </picture>
        </section>
    )
}