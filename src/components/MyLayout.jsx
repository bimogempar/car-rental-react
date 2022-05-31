import React from 'react'

// import Navbar from './Navbar';
import Footer from './Footer';
import NavbarLayout from './NavbarLayout';

export default function MyLayout({ children }) {
    return (
        <>
            <NavbarLayout />
            <div className='mt-5'>
                {children}
            </div>
            <Footer />
        </>
    )
};
