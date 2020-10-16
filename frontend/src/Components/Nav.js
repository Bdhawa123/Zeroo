import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import '../Styles/NavBar.css';
const Navigation = ()=>{

    return (
        <Navbar className='navbar'>
                <div className='navbarBrand' href='/Home'>ZEERO</div>
            <div className='profileContent'>
                Profile
            </div>
        </Navbar>
    )
}

export default Navigation;