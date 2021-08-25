import React from 'react';
import logo from "../../Images/logo.png";

const Header = () => {
    return (
        <div>
            <header className='logo'>
                <img src={logo} alt='Logo' />
            </header>
        </div>
    )
}

export default Header;
