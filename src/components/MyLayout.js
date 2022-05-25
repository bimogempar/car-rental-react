import { Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react'

export default function MyLayout({ children }) {
    return (
        <React.Fragment>
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={new Array(15).fill(null).map((_, index) => {
                        const key = index + 1;
                        return {
                            key,
                            label: `nav ${key}`,
                        };
                    })}
                />
            </Header>
            <main>
                {children}
            </main>
        </React.Fragment>
    )
}
