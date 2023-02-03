import { useCursorContext } from '../../pages/_app';
import React from 'react';
import styles from './NavRight.module.css';

const NavRight = () => {
  const { setCursorVariantFn } = useCursorContext();
  return (
    <div className={styles.sectionRight}>
      <div className={styles.nav}>
        <div class="nav-item">
          <a href="/work" class="link link-dark">
            Work
          </a>
          <div class="nav-underline"></div>
        </div>
        <div class="nav-item">
          <a href="/about" class="link link-dark">
            Blog
          </a>
          <div class="nav-underline"></div>
        </div>
        <div class="nav-item">
          <a href="/contact" class="link link-dark">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavRight;
