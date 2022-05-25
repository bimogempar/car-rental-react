import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout'
import React from 'react'
import Login from '../components/Login'
import Logout from '../components/Logout'


export default function Home() {
    return (
        <Layout>
            <Header>Header</Header>
            <Content>
                <Login />
                <Logout />
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    )
}