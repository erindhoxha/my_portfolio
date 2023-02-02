import { useCursorContext } from '../../pages/_app';
import React from 'react';
import styles from './Yeardate.module.css';

const YearDate = () => {
  const { setCursorVariantFn } = useCursorContext();
  return (
    <div orientation="left" className={styles.copyright}>
      <div className={styles.copyrightInner}>©/2023</div>
    </div>
  );
};

export default YearDate;
