import React, {Component} from 'react';
import Navbar from '../Navbar/navbar'
import UserCard from '../UserCard/userCard';

export default class Dashboard extends Component {
    render() {
        return (
            <div className='Parent'>
                <Navbar />
                <div className = "dashParent">
                    <div className='dashTop'>
                        <div className="dashProfile">
                        <UserCard />
                        <div className="dashExplanation">
                            <p>Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!</p>
                        </div>
                        </div>
                        
                    </div>
                    <div>
                        <div className="dashChild left"></div>
                    </div>
                </div>
                 Dashboard
                 <div>Recommended Friends</div>
            </div>
        )
    }
}