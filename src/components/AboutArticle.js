import React from 'react';

export default function AboutArticle (props) {
    return(
        <article className={props.orientation + ' about-article'}>
            <picture className="img-cont">
                <source srcSet={props.Mimg} alt={props.alt} media='(max-width: 600px)'></source>
                <source srcSet={props.Timg} alt={props.alt} media='(max-width: 1100px)'></source>
                <img src={props.img} alt={props.alt}/>
            </picture>
            <div className="text-cont">
                <h2>{props.header}</h2>
                <p>{props.text}</p>
            </div>
        </article>
    )
}