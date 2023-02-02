import { useCursorContext } from '../../pages/_app';
import React from 'react';
import styles from './NavLeft.module.css';
import YearDate from '../YearDate/YearDate';

const NavLeft = () => {
  const { setCursorVariantFn } = useCursorContext();
  return (
    <div className={styles.navLeft}>
      <div className={styles.navLeftItem}>
        <a
          onMouseEnter={() => setCursorVariantFn('text')}
          onMouseLeave={() => setCursorVariantFn('default')}
          href="https://www.linkedin.com/in/lauren-waller-46a95317/"
          className={styles.navLeftLink}
        >
          LI
        </a>
      </div>
      <div className={styles.navLeftItem}>
        <a
          onMouseEnter={() => setCursorVariantFn('text')}
          onMouseLeave={() => setCursorVariantFn('default')}
          href="https://twitter.com/waller_texas"
          className={styles.navLeftLink}
        >
          GH
        </a>
      </div>
      <div className={styles.navLeftItem}>
        <a
          onMouseEnter={() => setCursorVariantFn('text')}
          onMouseLeave={() => setCursorVariantFn('default')}
          href="https://dribbble.com/waller_texas"
          className={styles.navLeftLink}
        >
          TW
        </a>
      </div>
      <div className={styles.navLine}></div>
      <YearDate />
    </div>
  );
};

export default NavLeft;
