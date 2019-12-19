import React, { Component } from 'react';
export default class Header extends Component {
    constructor(props, context) {
        super(props, context);

    }
	 render() {	
        return (
            <header className="header">
               <div className="container">
               <nav className="navbar">
                <a className="navbar-brand" href="#">Logo</a>
                <ul className="nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                       Contact Us
                     </a>
                    </li>
                   </ul>
                </nav>
            </div>
        </header>
        );	
    }
}
