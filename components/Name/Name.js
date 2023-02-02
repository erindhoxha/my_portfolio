import React from 'react';
import styles from './Name.module.css';

const Name = () => {
  return (
    <div className={styles.nameContainer}>
      <div className="content">
        <div>
          <h1 className={styles.h1}>Erind Hoxha</h1>
        </div>
        <div>
          <div className={styles.box}>
            <div className={styles.innerBox}>
              <p className="description">Front-end developer</p>
              <p className="description">
                Currently working at{' '}
                <a className="link line-through semibold" href="#">
                  Kablamo
                </a>
              </p>
            </div>
            <div className={styles.innerBox}>
              <p className="description">Sydney, Australia</p>

              <p className="description">
                <a className="link line-through semibold" href="#">
                  hello@erindhoxha.dev
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Name;
