import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/shared/desktop/logo-light.png';
import facebook from '../assets/shared/desktop/icon-facebook.svg';
import instagram from '../assets/shared/desktop/icon-instagram.svg';
import pintrest from '../assets/shared/desktop/icon-pinterest.svg';
import twitter from '../assets/shared/desktop/icon-twitter.svg';
import youtube from '../assets/shared/desktop/icon-youtube.svg';

export default class Footer extends Component {
    state ={
        hideTop: this.props.hideTop,
    }

    render () {
        return(
            <footer>
                <div className="talk-cont mar" hidden={this.state.hideTop}>
                    <div className="layer-one">
                        <h2>Let's talk about our project</h2>
                        <p>Ready to take it to the next level? Contact us today and find out 
                        how our expertise can help your business grow.</p>
                    </div>
                    <Link className="btn-light" to="/contact" onClick={window.scrollTo(0, 0)} exact="true">get in touch</Link>
                </div>
                <div className="footer">
                    <div className="footer-lyr-one">
                        <Link className="logo-cont" to="/" onClick={window.scrollTo(0, 0)} exact="true">
                            <img src={logo} alt="designo"/>
                        </Link>
                        <div className="link-cont">
                            <Link className="link" to="/about" onClick={window.scrollTo(0, 0)} exact="true">our company</Link>
                            <Link className="link" to="/location" onClick={window.scrollTo(0, 0)} exact="true">locations</Link>
                            <Link className="link" to="/contact" onClick={window.scrollTo(0, 0)} exact="true">contact</Link>
                        </div>
                    </div>
                    <hr/>
                    <div className="footer-lyr-two">
                        <p><strong>Designo Central Office<br/></strong>3886 Wellington Street<br/>Toronto, Ontario M9C 3J5</p>
                        <p><strong>Contact Us (Central Office)<br/>P : +1 253-863-8967M <br/>M: contact@designo.co</strong></p>
                        <div>
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook"/></a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><img src={youtube} alt="youtube"/></a>
                            <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter"/></a>
                            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><img src={pintrest} alt="pinterest"/></a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram"/></a>  
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}