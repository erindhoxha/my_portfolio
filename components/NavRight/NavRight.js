import { useCursorContext } from '../../pages/_app';
import React from 'react';
import styles from './NavRight.module.css';
import { motion } from 'framer-motion';

const NavRight = () => {
  let initialLeft = {};
  let initialRight = {};
  let boxVariants = {};
  if (typeof window !== 'undefined') {
    const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
    if (!isMobile) {
      boxVariants = {
        default: {
          opacity: 1,
          x: 0,
        },
      };
      initialLeft = { opacity: 0, x: -40 };
      initialRight = { opacity: 0, x: 40 };
    } //if the width >= 768px, boxVariants will be empty, resulting in no animation
    //you need to refresh the page, it doesn't work when you resize it!
  }

  const { setCursorVariantFn } = useCursorContext();
  return (
    <div className={styles.sectionRight}>
      <div className={styles.nav}>
        <motion.div
          variants={boxVariants}
          animate="default"
          transition={{ duration: 0.5, delay: 0 }}
          initial={initialLeft}
        >
          <div class="nav-item" style={{ textAlign: 'left' }}>
            <a
              onMouseEnter={() => setCursorVariantFn('text')}
              onMouseLeave={() => setCursorVariantFn('default')}
              href="#work"
              class="link link-dark"
            >
              <div className={styles.flexBox}>Work</div>
            </a>
            <div class="nav-underline"></div>
          </div>
        </motion.div>

        <motion.div
          variants={boxVariants}
          animate="default"
          transition={{ duration: 0.5, delay: 0.3 }}
          initial={initialRight}
        >
          <div class="nav-item">
            <a
              onMouseEnter={() => setCursorVariantFn('text')}
              onMouseLeave={() => setCursorVariantFn('default')}
              href="#blog"
              class="link link-dark"
            >
              <div className={styles.flexBox}>Blog </div>
            </a>
            <div class="nav-underline"></div>
          </div>
        </motion.div>
        <motion.div
          variants={boxVariants}
          animate="default"
          transition={{ duration: 0.5, delay: 0.6 }}
          initial={initialRight}
        >
          <div class="nav-item">
            <a
              onMouseEnter={() => setCursorVariantFn('text')}
              onMouseLeave={() => setCursorVariantFn('default')}
              href="#contact"
              class="link link-dark"
            >
              <div className={styles.flexBox}>Contact </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NavRight;
