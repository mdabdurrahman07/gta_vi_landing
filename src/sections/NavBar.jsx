import React from 'react';
import navSVG from "/images/nav-logo.svg"
import navMenuSVG from "/images/menu.svg"
const NavBar = () => {
    return (
        <nav>
            <img src= {navSVG} alt="NavSvg Image" className='scale-90'/>
            <img src= {navMenuSVG} alt="NavMenuSvg Image" className='w-10'/>
        </nav>
    );
};

export default NavBar;