import React from 'react';
import {NavLink} from "react-router-dom";
import "./NavBar.scss";

export const NavBar: React.FC = () => {
    return (
        <nav>
            <div>Logo</div>
            <div className="links">
                <p>
                    <NavLink className={({ isActive}) => isActive ? 'selected' : ''} to='/'>Home</NavLink>
                </p>
                <p>
                    <NavLink className={({ isActive}) => isActive ? 'selected' : ''} to='/cars'>Cars</NavLink>
                </p>
                <p>
                    <NavLink className={({ isActive}) => isActive ? 'selected' : ''} to='/offices'>Offices</NavLink>
                </p>
                <p>
                    <NavLink className={({ isActive}) => isActive ? 'selected' : ''} to='/bookings'>Bookings</NavLink>
                </p>
            </div>
        </nav>
    );
};
