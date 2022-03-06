import React, { Component } from 'react';
import Nav from '../components/MNav';
import LocationElement from '../components/LocationElement';
import Footer from '../components/MFooter';

export default class Location extends Component {
    state ={

    }

    render () {
        return(
            <div>
                <Nav />
                <LocationElement />
                <Footer />
            </div>
        )
    }
}