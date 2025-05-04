import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <button onClick={() => window.location.href = '/AboutUs'}>About Us</button>
            <button onClick={() => window.location.href = '/ContactUs'}>Contact</button>
            <button onClick={() => window.location.href = 'https://x.com/withPrompX'}>X</button>
            <button onClick={() => window.location.href = 'https://www.youtube.com/@PrompX'}>YouTube</button>
        </nav>
    );
};

export default Navbar;