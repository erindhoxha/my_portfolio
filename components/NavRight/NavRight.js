import { useCursorContext } from '../../pages/_app';
import React from 'react';
import styles from './NavRight.module.css';
import { motion } from 'framer-motion';
import arrow from '../../images/arrow.png';
import Image from 'next/image';

const NavRight = () => {
  const { setCursorVariantFn } = useCursorContext();
  return (
    <div className={styles.sectionRight}>
      <div className={styles.nav}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <div class="nav-item">
            <a
              onMouseEnter={() => setCursorVariantFn('text')}
              onMouseLeave={() => setCursorVariantFn('default')}
              href="/work"
              class="link link-dark"
            >
              <div className={styles.flexBox}>
                Work{' '}
                <Image
                  alt="portfolio image"
                  src={arrow}
                  className={styles.arrow}
                />
              </div>
            </a>
            <div class="nav-underline"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -75 }}
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
              <div className={styles.flexBox}>
                Blog{' '}
                <Image
                  alt="portfolio image"
                  src={arrow}
                  className={styles.arrow}
                />
              </div>
            </a>
            <div class="nav-underline"></div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -75 }}
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
              <div className={styles.flexBox}>
                Contact{' '}
                <Image
                  alt="portfolio image"
                  src={arrow}
                  className={styles.arrow}
                />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NavRight;
