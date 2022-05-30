import React from 'react'
import Hero from '../components/Hero'
import MyLayout from '../components/MyLayout'


export default function Home() {
    return (
        <div>
           <MyLayout>
               <Hero/>
            </MyLayout>
        </div>
    )
}