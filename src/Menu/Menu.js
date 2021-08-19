import React from 'react';
import "./Menu.css";

function Menu()  {
    return(
        <div>
            <ul className="list">
                <li className="listlink">
                   <a href="/">Home</a> 
                </li>
                <li className="listlink">
                    <a href="#Case_Management"> Case Management </a>
                </li>
                <li className="listlink">
                    <a href="#Mental_Health">Mental Health</a>
                </li>
                <li className="listlink">
                    <a href="#Substance_Abuse">Substance Abuse</a>
                </li>
                <li className="listlink">
                    <a href="#Contact_Us">Contact Us</a>
                </li>
                <li className="listlink">
                    <a href="#Log-In">Log-In</a>
                </li> 
            </ul>
        </div>
    );
};
export default Menu;