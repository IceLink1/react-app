import React from 'react';
import './MyNavbar.css'
import {Link} from 'react-router-dom';

const MyNavbar = () => {
    return (
        <div className="myNavbar">
            <Link className='link' to="/home">Home</Link>
            <Link className='link' to="/posts">Posts</Link>
            <Link className='link' to="/contacts">Contacts</Link>
        </div>
    );
};

export default MyNavbar;