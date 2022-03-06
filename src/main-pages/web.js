import React, { Component } from 'react';
import Nav from '../components/MNav';
import PageHead from '../components/MPageHead';
import ProjectWindow from '../components/MProjectWindow';
import DesignLinks from '../components/MDesignLinks';
import Footer from '../components/MFooter';

import express from '../assets/web-design/desktop/image-express.jpg';
import transfer from '../assets/web-design/desktop/image-transfer.jpg';
import photon from '../assets/web-design/desktop/image-photon.jpg';
import builder from '../assets/web-design/desktop/image-builder.jpg';
import blogr from '../assets/web-design/desktop/image-blogr.jpg';
import camp from '../assets/web-design/desktop/image-camp.jpg';

export default class Web extends Component {
    pageHead = {
        title:"Web Design",
        text:"We build websites that serve as powerful marketing tools and bring memorable brand experiences."
    }

    designLinks = [
        {
            title: 'app design',
            destination: '/app-design',
            img: 'app'
        },
        {
            title: 'graphic design',
            destination: '/graphic-design',
            img: 'graphic'
        }
    ]

    products = [
        {
            'src': express,
            'alt': 'a light and modern site focusing on trucking',
            'title': 'express',
            'text': 'A multi-carrier shipping website for ecommerce businesses'
        },
        {
            'src': transfer,
            'alt': 'a light and modern site focusing on money transfers',
            'title': 'transfer',
            'text': 'Site for low-cost money transfers and sending money within seconds'
        },
        {
            'src': photon,
            'alt': 'a dark and modern site focusing on high quality music streaming',
            'title': 'photon',
            'text': 'A state-of-the-art music player with high-resolution audio and DSP effects'
        },
        {
            'src': builder,
            'alt': 'a light and modern site that connects customers with local contractors',
            'title': 'builder',
            'text': 'Connects users with local contractors based on their location'
        },
        {
            'src': blogr,
            'alt': 'a light and modern site that helps customers create personal blogs',
            'title': 'blogr',
            'text': 'Blogr is a platform for creating an online blog or publication'
        },
        {
            'src': camp,
            'alt': 'a cool and moden site that connects users to training in online arts',
            'title': 'camp',
            'text': 'Get expert training in coding, data, design, and digital marketing'
        }
    ]

    productWindowCont = () => {
        let x = 0;
        return(this.products.map((item) => {
            x++;
            return(
                <ProjectWindow src={item.src} alt={item.alt} title={item.title} text={item.text} key={x} itemKey={x}/>
            )
        }))
    }

    createDesignLinks = () => {
        let x = 0;
        return(this.designLinks.map((item) => {
            x++;
            return(
                <DesignLinks title={item.title} to={item.destination} img={item.img} key={x}/>
            )
        }))
    }

    render () {
        return(
            <div>
                <Nav />
                <PageHead title={this.pageHead.title} text={this.pageHead.text} />
                <section className="pad windows-cont">{this.productWindowCont()}</section>
                <section className="mar links-cont">{this.createDesignLinks()}</section>
                <Footer />
            </div>
        )
    }
}