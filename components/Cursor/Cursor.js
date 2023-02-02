import React, { useEffect, useState } from 'react';
import styles from './Cursor.module.css';
import { motion } from 'framer-motion';

const Cursor = ({ variants, cursorVariant }) => {
  return (
    <div className={styles.cursorWrapper}>
      <motion.div
        variants={variants}
        animate={cursorVariant}
        className={styles.cursor}
      ></motion.div>
    </div>
  );
};

export default Cursor;
