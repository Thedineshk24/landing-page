import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return <Component {...pageProps} />
}

export default MyApp
