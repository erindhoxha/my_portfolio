import { useCursorContext } from '../../pages/_app';
import React from 'react';
import styles from './NavRight.module.css';

const NavRight = () => {
  const { setCursorVariantFn } = useCursorContext();
  return (
    <div className={styles.sectionRight}>
      <div className={styles.nav}>
        <div class="nav-item">
          <a href="/work" class="nav-link">
            Work
          </a>
          <div class="nav-underline"></div>
        </div>
        <div class="nav-item">
          <a href="/about" class="nav-link">
            About
          </a>
          <div class="nav-underline"></div>
        </div>
        <div class="nav-item">
          <a href="/contact" class="nav-link">
            Contact
          </a>
          <div class="nav-underline"></div>
        </div>
      </div>
    </div>
  );
};

export default NavRight;
