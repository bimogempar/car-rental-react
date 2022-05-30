import React from 'react'
import Hero from '../components/Hero'
import MyLayout from '../components/MyLayout'
import Service from '../components/Service'
import Testimonial from '../components/Testimonial'
import Whyus from '../components/Whyus'


export default function Home() {
    return (
        <div>
           <MyLayout>
               <Hero/>
               <Service/>
               <Whyus/>
               <Testimonial/>
            </MyLayout>
        </div>
    )
}