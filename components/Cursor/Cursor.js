import React, { useEffect, useState } from 'react';
import styles from './Cursor.module.css';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
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

  return (
    <motion.div
      variants={variants}
      animate="default"
      className={styles.cursor}
    ></motion.div>
  );
};

export default Cursor;
