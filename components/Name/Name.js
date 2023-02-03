import React from 'react';
import { useCursorContext } from '../../pages/_app';
import styles from './Name.module.css';
import { motion } from 'framer-motion';

const Name = () => {
  const { setCursorVariantFn } = useCursorContext();
  return (
    <div className={styles.nameContainer}>
      <div className="content">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
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
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
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
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
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
