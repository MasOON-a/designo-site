import React, { Component } from 'react';
import Nav from '../components/MNav';
import HomeHeader from '../components/HomeHeader';
import DesignLinks from '../components/MDesignLinks';
import HomeInfo from '../components/HomeInfo';
import Footer from '../components/MFooter';

export default class Home extends Component {
    state ={
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
        },
        {
            title: 'graphic design',
            destination: '/graphic-design',
            img: 'graphic'
        }
    ]

    displayDesignLinks0 =() => {
        let x = -1;
        return(this.designLinks.map((item) => {
            x++;
            if(x != 0){
                return null;
            }else{
                return(
                    <DesignLinks title={item.title} to={item.destination} img={item.img} key={x}/>
                )
            }
        }))
    }
    
    displayDesignLinks1 =() => {
        let x = 0;
        return(this.designLinks.map((item) => {
            x++;
            if(x === 1){
                return null;
            }else{
                return(
                    <DesignLinks title={item.title} to={item.destination} img={item.img} key={x}/>
                )
            }
        }))
    }

    render () {
        return(
            <div>
                <Nav />
                <HomeHeader />
                <section className="home-links">
                    <div className="left-cont">{this.displayDesignLinks0()}</div>
                    <div className="right-cont">{this.displayDesignLinks1()}</div>
                </section>
                <HomeInfo />
                <Footer />
            </div>
        )
    }
}