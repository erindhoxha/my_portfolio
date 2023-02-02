import React from 'react';
import styles from './Name.module.css';

const Name = () => {
  return (
    <div className={styles.nameContainer}>
      <div className="content">
        <div>
          <h1>Erind Hoxha</h1>
        </div>
        <div>
          <p className="description">Front-end developer</p>
        </div>
        <div>
          <p className="description">
            A problem solver with a strong desire to create exceptional
            web-apps.
          </p>
          <p className="description">
            Currently working as a Front-end developer at{' '}
            <a className="link" href="https://kablamo.com.au">
              Kablamo
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Name;
