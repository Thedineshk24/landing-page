import React from 'react'
import Blogs from './components/Blogs'
import Cards from './components/Cards'
import Community from './components/Community'
import Hero from './components/Hero'
import Tools from './components/Tools'
import WeOffers from './components/WeOffers'
import WhyUs from './components/WhyUs'

const HomePage = () => {
    return (
        <>
            <Hero />
            <WhyUs />
            <Cards />
            <Tools />
            <WeOffers />
            <Community />
            <Blogs />
        </>
    )
}

export default HomePage