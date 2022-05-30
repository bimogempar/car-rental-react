import React from 'react'

import Navbar from './Navbar';
import Footer from './Footer';

export default function MyLayout({ children }) {
    return (
        <React.Fragment>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </React.Fragment>
    )
};
