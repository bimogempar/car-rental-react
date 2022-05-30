import React from 'react'

export default function MyLayout({ children }) {
    return (
        <React.Fragment>
            <main>
                {children}
            </main>
        </React.Fragment>
    )
}
