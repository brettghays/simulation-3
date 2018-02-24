import React, {Component} from 'react';
import Navbar from '../Navbar/navbar';


export default class Search extends Component {
    render() {
        return (
            <div className = 'search_parent'>
                <Navbar />
                <div className="search_parent_container">
                    <div className="search_child_container">
                        <div className="search_child_top">
                            <select name="Search Param">
                                <option value="First Name">First Name</option>
                                <option value="Last Name">Last Name</option>
                            </select>
                            <input type="text"/>
                            <button className="black_btn">Search</button>
                            <button className="gray_btn">Reset</button>
                        </div>
                        <div className="search_child_bottom"></div>
                    </div>
                </div>
                
            </div>
        )
    }
}