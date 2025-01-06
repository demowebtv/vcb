// `pages/_app.js`
import '../app/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}