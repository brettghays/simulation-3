import React, {Component} from 'react';
import home from '../../assets/home.png'
import search from '../../assets/search.png';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
//import {updatePageTitle} from '../../Reducer/reducer'
import './navbar.css'

export default class Navbar extends Component {
     /* componentDidMount(){
        let title = window.location.hash.split('/')[1];
        let capitalize = (string)  =>
        {
            var pagetitle = string.charAt(0).toUpperCase() + string.slice(1);
            return pagetitle
        }
        capitalize(title)
    } */

    render(){
        const title = window.location.hash.split('/')[1];
        let capitalize = (string)  =>
        {
            var pagetitle = string.charAt(0).toUpperCase() + string.slice(1);
            return pagetitle
        }
        const pageTitle = capitalize(title)
        return(
            <div className="parent">
                <div className="child">
                    <div className="left">
                        <div className="title">Helo</div>
                        <div className="dashboard">
                            <Link to='/dashboard'><img className = 'dashboard_image' src={home} alt="home"/></Link>
                        </div>
                        <div className="search">
                            <Link to='/search'><img className = 'dashboard_search' src={search} alt="search"/></Link>
                        </div>
                    </div>
                    <div className="middle">{pageTitle}</div>{/*Add capitalize function to state in reducer*/}
                    <div className="right">
                        Logout
                    </div>
                </div>

            </div>
        )
    }
}

/* let mapStateToProps = state => {
    const pageTitle = state;
    return {
        pageTitle
    }
}

export default connect(mapStateToProps, {updatePageTitle})(Navbar) */