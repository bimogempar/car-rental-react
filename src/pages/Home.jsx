import React from 'react'
import FAQ from '../components/FAQ'
import Hero from '../components/Hero'
import MyLayout from '../components/MyLayout'
import Rent from '../components/Rent'
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
               <Rent/>
               <FAQ/>
            </MyLayout>
        </div>
    )
}