import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <nav>
            <Link to="/">Main</Link>
            <Link to="/volunteers">Volunteers</Link>
        </nav>

    );
};

export default Header;