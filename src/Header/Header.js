import React from 'react';
import { Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Navigation from '../Menu/Navigation';
import "./Header.css";
function Header() {

    return (

        <div>
            <header id="direction">
                <Route>
                <Navigation />
                </Route>
                <Route>
                    <Navbar>
                        <Navbar.Brand>Non-Profit Landing Page Example</Navbar.Brand>
                    </Navbar>  
                </Route> 
            </header>
        </div>
    )
}

export default Header;