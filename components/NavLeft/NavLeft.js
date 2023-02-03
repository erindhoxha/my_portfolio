import { useCursorContext } from '../../pages/_app';
import React from 'react';
import styles from './NavLeft.module.css';
import YearDate from '../YearDate/YearDate';
import Email from '../Email/Email';

const NavLeft = () => {
  const { setCursorVariantFn } = useCursorContext();
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

      <div className={styles.navLine}></div>
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
