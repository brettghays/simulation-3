import React, {Component} from 'react';
//import {Link} from 'react-router-dom';

import logo from '../../assets/logo.png'
import './authview.css';

export default class AuthView extends Component {
    handleClick(){
        alert("clicked")
        window.open('http://localhost:3001/api/auth/login')
    }

    render() {
        return (
            <div className="container">
                <div>
                    AuthView
                    <div className = 'logo'>
                    <img src={logo} alt=""/> 
                    </div>
                    <div><button onClick={() => this.handleClick()}>Login/Register</button></div>
                </div>
                
            </div>
        )
    }
}