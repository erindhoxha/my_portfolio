import React from "react";
import styles from "./Yeardate.module.css";
import { motion } from "framer-motion";

const YearDate = () => {
  let boxVariants = {};
  let initialLine = {};

  if (typeof window !== "undefined") {
    const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
    if (!isMobile) {
      initialLine = { height: "0px" };
      boxVariants = {
        default: {
          height: "50px",
        },
      };
    } //if the width >= 768px, boxVariants will be empty, resulting in no animation
    //you need to refresh the page, it doesn't work when you resize it!
  }
  return (
    <div orientation="left" className={styles.copyright}>
      <motion.div
        initial={initialLine}
        transition={{ duration: 0.75, delay: 0.5 }}
        animate="default"
        className={styles.navLine}
        variants={boxVariants}
      ></motion.div>
      <div className={styles.copyrightInner}>©/2023</div>
    </div>
  );
};

export default YearDate;
