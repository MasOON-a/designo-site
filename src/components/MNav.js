import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/shared/desktop/logo-dark.png';

export default class Nav extends Component {
    state ={
        menuClass: '',
        filterHidden: 'filter-hidden',
        linksHidden: 'links-hidden',
        navSticky: ''
    }

    filterHeight = () => {
        let style = {};
        style.height = window.innerHeight - 263;
        return(style)
    }

    
    menuClick = () => {
        if(this.state.menuClass){
            // dropdown menu invisible
            this.setState({ menuClass: '', filterHidden: 'filter-hidden', linksHidden: 'links-hidden', navSticky: ''});
        }else{
            // dropdown menu visible
            this.setState({ menuClass: 'close', filterHidden: '', linksHidden: '', navSticky: 'sticky' });
        }
        
    }

    render () {
        this.filterHeight();
        return(
            <nav className={this.state.navSticky}>
                <div className="pad nav">
                    <Link className="logo-cont" to="/" onClick={window.scrollTo(0, 0)} exact="true">
                        <img src={logo} alt="designo"/>
                    </Link>
                    <div className={'menu-cont ' + this.state.menuClass} onClick={this.menuClick}>
                        <span className="one"></span>
                        <span className="two"></span>
                        <span className="thr"></span>
                    </div>
                    <div className={"nav-links " + this.state.linksHidden}>
                        <Link className="link" to="/about" onClick={window.scrollTo(0, 0)} exact="true">our company</Link>
                        <Link className="link" to="/location" onClick={window.scrollTo(0, 0)} exact="true">locations</Link>
                        <Link className="link" to="/contact" onClick={window.scrollTo(0, 0)} exact="true">contact</Link>
                    </div>
                </div>
                <div className={"filter " + this.state.filterHidden} style={this.filterHeight()} onClick={this.menuClick}></div>
            </nav>
        )
    }
}