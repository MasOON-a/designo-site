import React, { Component } from 'react';
import Nav from '../components/MNav';
import ContactHead from '../components/ContactHead';
import Locations from '../components/MLocations';
import Footer from '../components/MFooter';

export default class Contact extends Component {
    state ={

    }

    render () {
        return(
            <div>
                <Nav />
                <ContactHead />
                <Locations />
                <Footer />
            </div>
        )
    }
}