import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <div>
        <nav>
            <Link to='/'>HOMEPAGE</Link>
            <Link to='/campuses'> CAMPUSES</Link>
            <Link to='/students'>STUDENTS</Link>
        </nav>
        </div>
    )
}
