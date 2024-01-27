import React, { useEffect, useState } from "react";
import styles from "./Cursor.module.css";
import { motion } from "framer-motion";

const Cursor = ({ variants, cursorVariant, cursorText }) => {
  if (typeof window !== "undefined") {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      return null;
    }
  }
  return (
    <motion.div
      variants={variants}
      animate={cursorVariant}
      className={styles.cursor}
    >
      {cursorText}
    </motion.div>
  );
};

export default Cursor;
