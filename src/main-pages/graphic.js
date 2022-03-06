import React, { Component } from 'react';
import Nav from '../components/MNav';
import PageHead from '../components/MPageHead';
import ProjectWindow from '../components/MProjectWindow';
import DesignLinks from '../components/MDesignLinks';
import Footer from '../components/MFooter';

import change from '../assets/graphic-design/desktop/image-change.jpg';
import box from '../assets/graphic-design/desktop/image-boxed-water.jpg';
import science from '../assets/graphic-design/desktop/image-science.jpg';

export default class Graphics extends Component {
    pageHead = {
        title:"Graphic Design",
        text:"We deliver eye-catching branding materials that are tailored to meet your buisness objectives."
    }

    designLinks = [
        {
            title: 'app design',
            destination: '/app-design',
            img: 'app'
        },
        {
            title: 'web design',
            destination: '/web-design',
            img: 'web'
        }
    ]

    products = [
        {
            'src': change,
            'alt': 'an orange hard cover book with the title change',
            'title': 'tim brown',
            'text': 'A book cover designed for Tim Brown’s new release, ‘Change’'
        },
        {
            'src': box,
            'alt': 'a cardboard box of water centered around a background of flowers',
            'title': 'boxed water',
            'text': 'A simple packaging concept made for Boxed Water'
        },
        {
            'src': science,
            'alt': 'an abstract drawing of an eye, a book and the title "keeping up"',
            'title': 'science!',
            'text': 'A poster made in collaboration with the Federal Art Project'
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