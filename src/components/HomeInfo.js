import React, { Component } from 'react';

import pas from '../assets/home/desktop/illustration-passionate.svg';
import res from '../assets/home/desktop/illustration-resourceful.svg';
import fri from '../assets/home/desktop/illustration-friendly.svg';

export default class homeInfo extends Component {
    info = [
        {
            img: pas,
            alt: 'illustration of an artist drawing with a tablet',
            title: 'passionate',
            text: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
        },
        {
            img: res,
            alt: 'illustration of artist sitting at a desk and drawing on a tablet',
            title: 'resourceful',
            text: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
        },
        {
            img: fri,
            alt: 'illustration of two people presenting a sketch',
            title: 'friendly',
            text: ' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
        }
    ]

    loopInfo = () => {
        return(this.info.map((item) => {
            return(
                <div className="item-cont" key={this.info.indexOf(item)}>
                    <div className="img-cont">
                        <img src={item.img} alt={item.alt}/>
                    </div>
                    <div className="text-cont">
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </div>
                </div>
            )
        })
        )
    }
    
    render () {
        return(
            <section className="home-info">{this.loopInfo()}</section>
        )
    }
}