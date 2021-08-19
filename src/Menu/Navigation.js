import React,  { useState } from 'react';
import Hamburger from 'hamburger-react';
import Menu from '../Menu/Menu';


const Navigation = () => {
const [ isOpen, setOpen ] = useState(false);



    return (
        <nav>
            <Hamburger onToggle={() => setOpen(!isOpen)} />  
            {isOpen &&  (
            <div className="dropdown">
            <Menu />
            </div>
            )}
        </nav>  
    )
}

export default Navigation;