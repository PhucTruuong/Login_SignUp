import React from 'react';
import {Link} from 'react-router-dom';

const Navigator = () => {
    return (
        <nav style={{margin: "0rem 2rem", textAlign: "center"}}>
            <Link to="/login" style={{margin: "0rem 2rem"}}>Login</Link>
            <Link to="/register" style={{margin: "0rem 2rem"}}>Register</Link>
            <Link to="/dashboard" style={{margin: "0rem 2rem"}}>Dashboard</Link>
        </nav>
    );
};

export default Navigator;