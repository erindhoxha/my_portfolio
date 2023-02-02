import { useCursorContext } from '../../pages/_app';
import React from 'react';
import styles from './Email.module.css';

const Email = () => {
  const { setCursorVariantFn } = useCursorContext();
  return (
    <div orientation="left" className={styles.copyright}>
      <a
        className="line-through"
        href="mailto:hello@erindhoxha.dev"
        onMouseEnter={() => setCursorVariantFn('text')}
        onMouseLeave={() => setCursorVariantFn('default')}
      >
        <div className={styles.copyrightInner}>hello@erind.dev</div>
      </a>
    </div>
  );
};

export default Email;
