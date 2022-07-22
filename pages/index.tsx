import { useEffect, useState } from "react";
import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from './components/Footer';
import Navigation from './components/Navigation'
import ErrorBoundary from './ErrorBoundry/MyErrorBoundry';
import HomePage from './HomePage';

const Home: NextPage = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <ErrorBoundary>
        <Navigation />
        <HomePage />
        <Footer />
      </ErrorBoundary>
    </>
  )
}

export default Home
