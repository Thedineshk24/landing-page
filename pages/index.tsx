import type { NextPage } from 'next';
import Head from 'next/head';
import Cards from './components/Cards';
import Hero from './components/Hero';
import Navigation from './components/Navigation'
import Tools from './components/Tools';
import WhyUs from './components/WhyUs';

const Home: NextPage = () => {
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  </Head>
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
