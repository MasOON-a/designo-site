import React, { Component } from 'react';
import Nav from '../components/MNav';
import AboutHead from '../components/AboutHead';
import AboutArticle from '../components/AboutArticle';
import AboutLocations from '../components/MLocations';
import Footer from '../components/MFooter';

import talentImg from '../assets/about/desktop/image-world-class-talent.jpg';
import TtalentImg from '../assets/about/tablet/image-world-class-talent.jpg';
import MtalentImg from '../assets/about/mobile/image-world-class-talent.jpg';

import dealImg from '../assets/about/desktop/image-real-deal.jpg';
import TdealImg from '../assets/about/tablet/image-real-deal.jpg';
import MdealImg from '../assets/about/mobile/image-real-deal.jpg';

export default class About extends Component {
    state ={
    }

    articleInfo = [
        {
            ori: 'l',
            img: talentImg,
            Timg: TtalentImg,
            Mimg: MtalentImg,
            alt: 'a woman gazing at a wall of art',
            hea: 'World-class talent',
            tex: 'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms. Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.'
        },
        {
            ori: 'r',
            img: dealImg,
            Timg: TdealImg,
            Mimg: MdealImg,
            alt: 'hands putting photos up on a wall',
            hea: 'The real deal',
            tex: 'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success. We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.'
        }
    ]

    render () {
        return(
            <div>
                <Nav />
                <AboutHead />
                <AboutArticle orientation={this.articleInfo[0].ori} img={this.articleInfo[0].img} Timg={this.articleInfo[0].Timg} Mimg={this.articleInfo[0].Mimg} alt={this.articleInfo[0].alt} header={this.articleInfo[0].hea} text={this.articleInfo[0].tex}/>
                <AboutLocations />
                <AboutArticle orientation={this.articleInfo[1].ori} img={this.articleInfo[1].img} Timg={this.articleInfo[1].Timg} Mimg={this.articleInfo[1].Mimg} alt={this.articleInfo[1].alt} header={this.articleInfo[1].hea} text={this.articleInfo[1].tex}/>
                <Footer />
            </div>
        )
    }
}