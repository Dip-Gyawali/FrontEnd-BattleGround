import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Editor() {
    return (
        <div className='editor'>
            <nav className='navbar'>
                <ul>
                    <li>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>
                            HTML
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/css' className={({ isActive }) => isActive ? 'active' : ''}>
                            CSS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/js' className={({ isActive }) => isActive ? 'active' : ''}>
                            JS
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}
