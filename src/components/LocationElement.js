import React, { Component }from 'react';

import aus from '../assets/locations/desktop/image-map-australia.png';
import can from '../assets/locations/desktop/image-map-canada.png';
import uni from '../assets/locations/desktop/image-map-united-kingdom.png';

import Taus from '../assets/locations/tablet/image-map-australia.png';
import Tcan from '../assets/locations/tablet/image-map-canada.png';
import Tuni from '../assets/locations/tablet/image-map-uk.png';

export default class LocationArticle extends Component {
    state ={
        articleInfo:[
            {
                dir: 'r',
                hea: 'Canada',
                src: can,
                Tsrc: Tcan,
                alt: 'google map of area where Designo offices are',
                colOne: [
                    'Designo Central Office',
                    '3886 Wellington Street',
                    'Toronto, Ontario M9C 3J5'
                ],
                colTwo: [
                    'Contact',
                    'P : +1 253-863-8967',
                    'M : contact@designo.co'
                ]
            },
            {
                dir: 'l',
                hea: 'Australia',
                src: aus,
                Tsrc: Taus,
                alt: 'google map of area where Designo offices are',
                colOne: [
                    'Designo AU Office',
                    '19 Balonne Street',
                    'New South Wales 2443'
                ],
                colTwo: [
                    'Contact',
                    'P : (02) 6720 9092',
                    'M : contact@designo.au'
                ]
            },
            {
                dir: 'r',
                hea: 'United Kingdom',
                src: uni,
                Tsrc: Tuni,
                alt: 'google map of area where Designo offices are',
                colOne:['Designo UK Office','13  Colorado Way','Rhyd-y-fro SA8 9GA'],
                colTwo:['Contact','P : 078 3115 1400','M : contact@designo.uk']
            }
        ]
    }
        

    returnArticles () {
        return(this.state.articleInfo.map((item) => {
            return(
                <article className={item.dir} key={this.state.articleInfo.indexOf(item)}>
                    <div className="text-cont">
                        <h2>{item.hea}</h2>
                        <div className="details-cont">
                            <div className="l-cont">
                                <p><strong>{item.colOne[0]}</strong></p>
                                <p>{item.colOne[1]}</p>
                                <p>{item.colOne[2]}</p>
                            </div>
                            <div>
                                <p><strong>{item.colTwo[0]}</strong></p>
                                <p>{item.colTwo[1]}</p>
                                <p>{item.colTwo[2]}</p>
                            </div>
                        </div>
                    </div>
                    <picture className="img-cont">
                        <source srcSet={item.src} alt={item.alt} media='(max-width: 600px)'></source>
                        <source srcSet={item.Tsrc} alt={item.alt} media='(max-width: 1100px)'></source>
                        <img src={item.src} alt={item.alt} />
                    </picture>
                </article>
            )
        })
        )
    }

    render () {
        return(
            <section className="location-article">{this.returnArticles()}</section>
        )
    }
}