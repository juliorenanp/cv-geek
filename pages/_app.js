import '../styles/globals.css'
import ReactGA from 'react-ga';

function MyApp({ Component, pageProps }) {
  ReactGA.initialize('G-2VFX7QGY88');
  return <Component {...pageProps} />
}

export default MyApp
