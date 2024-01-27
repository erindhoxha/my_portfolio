import React, { useEffect, useState } from "react";
import styles from "./Cursor.module.css";
import { motion } from "framer-motion";

const Cursor = ({ variants, cursorVariant, cursorText }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    console.log("This is rendered!");
    setIsClient(true);
  }, []);

  if (isClient) {
    const isMobile = window.innerWidth < 768;
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isTablet = /ipad|android|tablet/.test(userAgent);
    if (isTablet || isMobile) {
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
