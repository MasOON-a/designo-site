import React, { Component }from 'react';

import err from '../assets/contact/desktop/icon-error.svg';

export default class ContactHead extends Component {
    state = {
        emaErr: 'Can\'t be empty',
        phoErr: 'Can\'t be empty',

        namErrVis: '',
        emaErrVis: '',
        phoErrVis: '',
        mesErrVis: '',
    }

    onReject = (el) => {
        el.target.setCustomValidity(' ');
        let inputName = el.target.placeholder;
        switch (inputName) {
            case 'Name':
                this.setState({ namErrVis: ' rejected' });
                setTimeout(() => {
                    if(this.state.namErrVis === ' rejected'){
                        this.setState({ namErrVis: '' });
                    }
                }, 7000)
                break;
            case 'Email Adress':
                if(!el.target.validity.valueMissing){
                    this.setState({ emaErr: 'Formatting error'});
                }else{
                    this.setState({ emaErr: 'Can\'t be empty'});
                }
                this.setState({ emaErrVis: ' rejected' });
                setTimeout(() => {
                    if(this.state.emaErrVis === ' rejected'){
                        this.setState({ emaErrVis: '' });
                    }
                }, 7000)
                break;
            case 'Phone (1234567890)':
                if(!el.target.validity.valueMissing){
                    this.setState({ phoErr: 'Formatting error'});
                }else{
                    this.setState({ phoErr: 'Can\'t be empty'});
                }
                this.setState({ phoErrVis: ' rejected' });
                setTimeout(() => {
                    if(this.state.phoErrVis === ' rejected'){
                        this.setState({ phoErrVis: '' });
                    }
                }, 7000)
                break;
            case 'Your Message':
                this.setState({ mesErrVis: ' rejected' });
                setTimeout(() => {
                    if(this.state.mesErrVis === ' rejected'){
                        this.setState({ mesErrVis: '' });
                    }
                }, 7000)
                break;
            default:
                break;
        }
    }

    clearReject = (el) => {
        let inputName = el.target.placeholder;
        switch (inputName) {
            case 'Name':
                if(this.state.namErrVis === ' rejected'){
                    this.setState({ namErrVis: '' });
                }
                break;
            case 'Email Adress':
                if(this.state.emaErrVis === ' rejected'){
                    this.setState({ emaErrVis: '' });
                }
                break;
            case 'Phone (1234567890)':
                if(this.state.phoErrVis === ' rejected'){
                    this.setState({ phoErrVis: '' });
                }
                break;
            case 'Your Message':
                if(this.state.mesErrVis === ' rejected'){
                    this.setState({ mesErrVis: '' });
                }
                break;
            default:
                break;
        }
    }

    render () {
        return(
            <section className="contact-head">
                <div className="text-cont">
                    <h1>Contact Us</h1>
                    <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
                </div>
                <form>
                    <div className='input-cont'>
                        <input type="text" placeholder='Name' onInvalid={(el) => this.onReject(el)} onClick={(el) => {this.clearReject(el)}} required></input>
                        <p className={"err" + this.state.namErrVis}>Can't be empty<img src={err} alt="exclimation point in bubble"/></p>
                    </div>
                    <div className='input-cont'>
                        <input type="email" placeholder='Email Adress' onInvalid={(el) => this.onReject(el)} onClick={(el) => {this.clearReject(el)}} required></input>
                        <p className={"err" + this.state.emaErrVis}>{this.state.emaErr}<img src={err} alt="exclimation point in bubble"/></p>
                    </div>
                    <div className='input-cont'>
                        <input type="text" placeholder='Phone (1234567890)' pattern="[0-9]{10}" onInvalid={(el) => this.onReject(el)} onClick={(el) => {this.clearReject(el)}} required></input>
                        <p className={"err" + this.state.phoErrVis}>{this.state.phoErr}<img src={err} alt="exclimation point in bubble"/></p>
                    </div>
                    <div className='input-cont'>
                        <input type="text" placeholder='Your Message' onInvalid={(el) => this.onReject(el)} onClick={(el) => {this.clearReject(el)}} required></input>
                        <p className={"err" + this.state.mesErrVis}>Can't be empty<img src={err} alt="exclimation point in bubble"/></p>
                    </div>
                    <div className="submit-cont">
                        <button type="submit" className="submit">submit</button>
                    </div>
                </form>
            </section>
        )
    }
}