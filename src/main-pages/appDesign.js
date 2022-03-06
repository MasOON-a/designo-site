import React, { Component } from 'react';
import Nav from '../components/MNav';
import PageHead from '../components/MPageHead';
import ProjectWindow from '../components/MProjectWindow';
import DesignLinks from '../components/MDesignLinks';
import Footer from '../components/MFooter';

import airfilter from '../assets/app-design/desktop/image-airfilter.jpg';
import eyecam from '../assets/app-design/desktop/image-eyecam.jpg';
import faceit from '../assets/app-design/desktop/image-faceit.jpg';
import todo from '../assets/app-design/desktop/image-todo.jpg';
import loopstudios from '../assets/app-design/desktop/image-loopstudios.jpg';

export default class AppDesign extends Component {
    pageHead = {
        title:"App Design",
        text:"Our mobile designes bring intuitive digital solutions to your customers right at their fingertips."
    }

    designLinks = [
        {
            title: 'web design',
            destination: '/web-design',
            img: 'web'
        },
        {   
            title: 'graphic design',
            destination: '/graphic-design',
            img: 'graphic'
        }
    ]

    products = [
        {
            'src': airfilter,
            'alt': 'a sleek site selling ventilation solutions',
            'title': 'airfilter',
            'text': 'Solving the problem of poor indoor air quality by filtering the air'
        },
        {
            'src': eyecam,
            'alt': 'a friendly and modern site that allows you to edit photos and videos',
            'title': 'eyecam',
            'text': 'Product that lets you edit your favorite photos and videos at any time'
        },
        {
            'src': faceit,
            'alt': 'a blue themed service that connects you with friends',
            'title': 'faceit',
            'text': 'Get to meet your favorite internet superstar with the faceit app'
        },
        {
            'src': todo,
            'alt': 'a dark and modern calender app',
            'title': 'todo',
            'text': 'A todo app that features cloud sync with light and dark mode'
        },
        {
            'src': loopstudios,
            'alt': 'a modern site offering a VR experience',
            'title': 'loopstudios',
            'text': 'A VR experience app made for Loopstudios'
        },
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
                <section className='pad windows-cont'>{this.productWindowCont()}</section>
                <section className="mar links-cont">{this.createDesignLinks()}</section>
                <Footer />
            </div>
        )
    }
}