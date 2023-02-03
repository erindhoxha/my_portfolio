import Link from 'next/link';
import React from 'react';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <Link href={'/'} className="link">
      <h1 className={`${styles.h1}`}>erindhoxha.dev_</h1>
      <p className={styles.p}>front-end, ui/ux</p>
    </Link>
  );
};

export default Logo;
