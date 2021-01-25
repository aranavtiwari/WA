import React from 'react'
import{NavLink} from 'react-router-dom';

function Nav() {
    return (
        <div className='nav'>
            <div className="nav-bar">
                <NavLink to="/" activeClassName='logo'>WA.</NavLink>
                <div className="nav-right">
                <NavLink to="/qutoes" className="about">Qutoes</NavLink>
                <NavLink to="/about"  className='about'>About Us</NavLink>
                </div>
                
            </div>
        </div>
    )
}

export default Nav
