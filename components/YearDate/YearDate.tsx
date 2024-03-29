import React from "react";
import styles from "./Yeardate.module.css";
import { motion } from "framer-motion";

const YearDate = ({ year }) => {
  let initialLine = { height: "0px" };
  let boxVariants = {
    default: {
      height: "50px",
    },
  };

  if (typeof window !== "undefined") {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      initialLine = { height: "0px" };
      boxVariants = {
        default: {
          height: "50px",
        },
      };
    }
  }
  return (
    <div
      className={styles.copyright}
      aria-label="This website is developed in 2024 and constantly updated."
    >
      <motion.div
        initial={initialLine}
        transition={{ duration: 0.75, delay: 0.5 }}
        animate="default"
        className={styles.navLine}
        variants={boxVariants}
      ></motion.div>
      <div className={styles.copyrightInner}>©/{year || 2024}</div>
    </div>
  );
};

export default YearDate;
