import React from 'react';
import { useCursorContext } from '../../pages/_app';
import styles from './Name.module.css';
import { motion } from 'framer-motion';

const Name = () => {
  const { setCursorVariantFn } = useCursorContext();
  let boxVariants = {};
  let initial = {};
  if (typeof window !== 'undefined') {
    const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
    if (!isMobile) {
      boxVariants = {
        default: {
          opacity: 1,
          x: 0,
        },
      };
      initial = { opacity: 0, x: -30 };
    } //if the width >= 768px, boxVariants will be empty, resulting in no animation
    //you need to refresh the page, it doesn't work when you resize it!
  }
  return (
    <div className={styles.nameContainer}>
      <div className="content">
        <motion.div
          variants={boxVariants}
          animate="default"
          transition={{ duration: 0.5, delay: 0.7 }}
          initial={initial}
        >
          <div>
            <h1
              className={styles.h1}
              title="Did you know that Hoxha means 'mentor' in Albanian?"
            >
              erind hoxha
            </h1>
          </div>
        </motion.div>
        <div>
          <div className={styles.box}>
            <motion.div
              variants={boxVariants}
              animate="default"
              transition={{ duration: 0.5, delay: 1 }}
              initial={initial}
            >
              <div className={styles.innerBox}>
                <p className="description">front-end, ui/ux</p>
                <p className="description mb-0">
                  Currently working at{' '}
                  <a
                    className="link line-through semibold"
                    href="#"
                    onMouseEnter={() => setCursorVariantFn('text')}
                    onMouseLeave={() => setCursorVariantFn('default')}
                  >
                    Kablamo
                  </a>
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={boxVariants}
              animate="default"
              transition={{ duration: 0.5, delay: 1 }}
              initial={initial}
            >
              <div className={styles.innerBox}>
                <p className="description">Sydney, Australia 🇦🇺</p>

                <p className="description mb-0">
                  <a
                    className="link line-through semibold"
                    href="#"
                    onMouseEnter={() => setCursorVariantFn('text')}
                    onMouseLeave={() => setCursorVariantFn('default')}
                  >
                    hello@erindhoxha.dev
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Name;
