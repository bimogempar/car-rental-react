import React from 'react'
import Hero from '../components/Hero'
import MyLayout from '../components/MyLayout'
import Service from '../components/Service'


export default function Home() {
    return (
        <div>
           <MyLayout>
               <Hero/>
               <Service/>
            </MyLayout>
        </div>
    )
}