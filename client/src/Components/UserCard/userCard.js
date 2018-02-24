import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './userCard.css'

class UserCard extends Component {
    render() {
        return(
            <div className="dash-parent">
                <div className="dash-child-left">
                    <img src={this.props.image} alt="image"/>
                </div>
                <div className="dash-child-right">
                    <p>{this.props.firstName}</p>
                    <p>{this.props.lastName}</p>
                    <Link to='/profile'><button>Edit Profile</button></Link>
                </div>
            </div>
        )
    }
}

let mapStateToProps = state => {
    const {firstName, lastName, image} = state;
    return {
        firstName,
        lastName,
        image
    }
};

export default connect(mapStateToProps)(UserCard)
