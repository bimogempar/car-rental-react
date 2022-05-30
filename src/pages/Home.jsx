import React from 'react'
import Hero from '../components/Hero'
import MyLayout from '../components/MyLayout'
import Service from '../components/Service'
import Whyus from '../components/Whyus'


export default function Home() {
    return (
        <div>
           <MyLayout>
               <Hero/>
               <Service/>
               <Whyus/>
            </MyLayout>
        </div>
    )
}