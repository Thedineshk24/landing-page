import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from './components/Footer';
import Navigation from './components/Navigation'
import ErrorBoundary from './ErrorBoundry/MyErrorBoundry';
import HomePage from './HomePage';

const Home: NextPage = () => {
  // if css is loading then show loading screen
  if (typeof window !== 'undefined') {
    if (window.__NEXT_DATA__.props.pageProps.isLoading) {
      return <div>Loading...</div>
    }
  }
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  </Head>
  return (
    <ErrorBoundary>
      <Navigation />
      <HomePage />
      <Footer />
    </ErrorBoundary>
  )
}

export default Home
