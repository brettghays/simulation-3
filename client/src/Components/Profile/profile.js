import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navbar from '../Navbar/navbar';
import UserCard from '../UserCard/userCard'


class Profile extends Component {
    render() {
        return (
            <div>                
                <div>
                    <Navbar />                    
                </div>
                <div>
                    <div><img src={this.props.image} alt=""/></div>
                    <div>
                        <p>{this.props.firstName}</p>
                        <p>{this.props.lastName}</p>
                    </div>
                </div>
                <div>
                    <button>Update</button>
                    <button>Cancel</button>
                </div>

                <div>
                    <div>
                        <p>First Name</p>
                        <input type="text"/>
                    </div>
                    <div>
                        <p>Last Name</p>
                        <input type="text"/>
                    </div>
                    <div>
                        <p>Gender</p>
                        <select name="" id="">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div>
                        <p>Hair Color</p>
                        <select name="" id="">
                            <option value="">Red</option>
                            <option value="">Blue</option>
                            <option value="">Brown</option>
                            <option value="">Blonde</option>
                            <option value="">Black</option>
                            <option value="">Green</option>
                        </select>
                    </div>
                    <div></div>
                </div>
                
            </div>
        )
    }
}

let mapStateToProps = state => {
    const {firstName,lastName,image} = state;
    return{
        firstName,
        lastName,
        image
    }
}

export default connect(mapStateToProps)(Profile)