import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '@/styles/globals.css';
import '@/styles/fonts.css';
import Cursor from '@/components/Cursor/Cursor';
import Navbar from '@/components/Navbar/Navbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Cursor />
      <Component {...pageProps} />
    </>
  );
}
