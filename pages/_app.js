import '@/styles/globals.css';
import '@/styles/fonts.css';
import Cursor from '@/components/Cursor/Cursor';
import Navbar from '@/components/Navbar/Navbar';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Cursor />
      <Component {...pageProps} />
    </>
  );
}
