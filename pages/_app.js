import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../styles/globals.css';
import '../styles/fonts.css';
import Navbar from '../components/Navbar/Navbar';
import Cursor from '../components/Cursor/Cursor';
import { createContext, useContext, useEffect, useState } from 'react';

export const CursorContext = createContext({
  mousePosition: {
    x: undefined,
    y: undefined,
  },
  cursorVariant: '',
  setCursorVariant: () => null,
  variants: {},
});

export default function App({ Component, pageProps }) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState('default');
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 70,
      width: 70,
      x: mousePosition.x - 35,
      y: mousePosition.y - 35,
      backgroundColor: 'white',
      mixBlendMode: 'difference',
    },
    textInImage: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
    },
  };
  const mouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  useEffect(() => {
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  function setCursorVariantFn(string) {
    setCursorVariant(string);
  }

  const context = {
    mousePosition,
    cursorVariant,
    setCursorVariantFn,
    variants,
  };

  return (
    <>
      <CursorContext.Provider value={context}>
        <Navbar />
        <Cursor variants={variants} cursorVariant={cursorVariant} />
        <Component {...pageProps} />
      </CursorContext.Provider>
    </>
  );
}

export const useCursorContext = () => {
  const context = useContext(CursorContext);
  return context;
};
