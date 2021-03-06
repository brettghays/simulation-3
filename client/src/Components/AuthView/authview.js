import React, {Component} from 'react';
import axios from 'axios';
//import {Link} from 'react-router-dom';

import logo from '../../assets/logo.png'
//import './authview.css';

export default class AuthView extends Component {
    render() {
        return (
            <div className="container">
                <div className = "innerContainer">
                    <div className = 'logo'>
                        <img src={logo} alt="logo"/> 
                    </div>
                    <div className = 'helo'>
                        <h1>Helo</h1>
                    </div>
                    <div className="auth0Link">
                        <a href="http://localhost:3001/api/auth/login">Login / Register</a>
                    </div>
                </div>
                
            </div>
        )
    }
}