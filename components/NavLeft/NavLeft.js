import { useCursorContext } from '../../pages/_app';
import React from 'react';
import styles from './NavLeft.module.css';
import { motion } from 'framer-motion';

const NavLeft = () => {
  const { setCursorVariantFn } = useCursorContext();

  let boxVariants = {};
  let initialLine = {};

  if (typeof window !== 'undefined') {
    const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
    if (!isMobile) {
      initialLine = { height: '0%', opacity: 0.2 };
      boxVariants = {
        default: {
          height: '100%',
          opacity: 1,
        },
      };
    } //if the width >= 768px, boxVariants will be empty, resulting in no animation
    //you need to refresh the page, it doesn't work when you resize it!
  }
  return (
    <div className={styles.navLeft}>
      <div className={styles.navLeftItem}>
        <a
          onMouseEnter={() => setCursorVariantFn('text')}
          onMouseLeave={() => setCursorVariantFn('default')}
          href="#"
          className={styles.navLeftLink}
        >
          github
        </a>
      </div>

      <motion.div
        initial={initialLine}
        transition={{ duration: 0.75, delay: 0.5 }}
        animate="default"
        className={styles.navLine}
        variants={boxVariants}
      ></motion.div>
      <div className={styles.navLeftItem}>
        <a
          onMouseEnter={() => setCursorVariantFn('text')}
          onMouseLeave={() => setCursorVariantFn('default')}
          href="#"
          className={styles.navLeftLink}
        >
          LI
        </a>
      </div>
      <div className={styles.navLeftItem}>
        <a
          onMouseEnter={() => setCursorVariantFn('text')}
          onMouseLeave={() => setCursorVariantFn('default')}
          href="#"
          className={styles.navLeftLink}
        >
          CP
        </a>
      </div>
    </div>
  );
};

export default NavLeft;
