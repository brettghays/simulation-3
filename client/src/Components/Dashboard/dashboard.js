import React, {Component} from 'react';
import Navbar from '../Navbar/navbar'

export default class Dashboard extends Component {
    render() {
        return (
            <div className='Parent'>
                <Navbar />
                Dashboard
            </div>
        )
    }
}