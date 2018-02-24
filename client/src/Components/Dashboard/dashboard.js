import React, {Component} from 'react';
import Navbar from '../Navbar/navbar'
import UserCard from '../UserCard/userCard';

import './dashboard.css'

export default class Dashboard extends Component {
    render() {
        return (
            <div className='dash_parent'>
                <Navbar />
                <div className = "dash_parent_container">
                    <div className="dash_child_container">
                        <div className='dashTop'>
                            <div className="dashProfile">
                                <UserCard />                                
                            </div>
                            <div className="dashExplanation">
                                <p >Welcome to Helo! Find recommended friends based on your similarities,and even search for them by name. The more you update your profile, the better recommendations we can make!</p>
                            </div>
                        </div>
                    </div>
                </div>
                    <div>
                        <div className="recommended_header">
                            <span className="rec_header_span">Recommended Friends</span>
                            <span className="rec_select_span">Sorted by</span>
                            <select name="Sort" id="">
                                <option value="First Name">First Name</option>
                                <option value="Last Name">Last Name</option>
                                <option value="Gender">Gender</option>
                                <option value="Hobby">Hobby</option>
                                <option value="Hair Color">Hair Color</option>
                                <option value="Eye Color">Eye Color</option>
                                <option value="Birthday">Birthday</option>
                            </select>
                        </div>
                    </div>  
               
                 
                 
            </div>
        )
    }
}