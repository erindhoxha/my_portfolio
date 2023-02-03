import { useCursorContext } from '../../pages/_app';
import React from 'react';
import styles from './NavRight.module.css';
import { motion } from 'framer-motion';

const NavRight = () => {
  const { setCursorVariantFn } = useCursorContext();
  return (
    <div className={styles.sectionRight}>
      <div className={styles.nav}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <div class="nav-item" style={{ textAlign: 'left' }}>
            <a
              onMouseEnter={() => setCursorVariantFn('text')}
              onMouseLeave={() => setCursorVariantFn('default')}
              href="/work"
              class="link link-dark"
            >
              <div className={styles.flexBox}>Work</div>
            </a>
            <div class="nav-underline"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div class="nav-item">
            <a
              onMouseEnter={() => setCursorVariantFn('text')}
              onMouseLeave={() => setCursorVariantFn('default')}
              href="/about"
              class="link link-dark"
            >
              <div className={styles.flexBox}>Blog </div>
            </a>
            <div class="nav-underline"></div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div class="nav-item">
            <a
              onMouseEnter={() => setCursorVariantFn('text')}
              onMouseLeave={() => setCursorVariantFn('default')}
              href="/contact"
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
