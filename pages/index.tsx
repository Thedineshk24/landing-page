import type { NextPage } from 'next';
import Cards from './components/Cards';
import Hero from './components/Hero';
import Navigation from './components/Navigation'
import Tools from './components/Tools';
import WhyUs from './components/WhyUs';

const Home: NextPage = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <WhyUs />
      <Cards />
      <Tools />
    </>
  )
}

export default Home
