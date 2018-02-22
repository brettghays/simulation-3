import React, {Component} from 'react';
import axios from 'axios';
//import {Link} from 'react-router-dom';

import logo from '../../assets/logo.png'
//import './authview.css';

export default class AuthView extends Component {
    handleClick(){
        alert("clicked")
        //window.open('http://localhost:3001/api/auth/login')
        axios.get('http://www.espn.com')
    }

    render() {
        return (
            <div className="container">
                <div className = "innerContainer">
                    <div className = 'logo'>
                        <img src={logo} alt=""/> 
                    </div>
                    <div className = 'helo'>
                        <h1>Helo</h1>
                    </div>
                    <button className = 'authButton' onClick={() => this.handleClick()}>Login/Register</button>
                </div>
                
            </div>
        )
    }
}