import { useCursorContext } from "../../pages/_app";
import React from "react";
import styles from "./NavLeft.module.css";
import { motion } from "framer-motion";

const NavLeft = () => {
  const { setCursorVariantFn, setCursorText } = useCursorContext();

  let boxVariants = {
    default: {
      height: "100%",
      opacity: 1,
    },
  };

  let initialLine = { height: "0%", opacity: 1 };

  if (typeof window !== "undefined") {
    const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
    if (!isMobile) {
      initialLine = { height: "0%", opacity: 0.2 };
      boxVariants = {
        default: {
          height: "100%",
          opacity: 1,
        },
      };
    } //if the width >= 768px, boxVariants will be empty, resulting in no animation
    //you need to refresh the page, it doesn't work when you resize it!
  }
  return (
    <div className={styles.navLeft}>
      <div className={styles.navLeftItem}>
        <a
          onMouseEnter={() => {
            setCursorVariantFn("text");
            setCursorText("github →");
          }}
          onMouseLeave={() => {
            setCursorVariantFn("default");
            setCursorText("");
          }}
          target="_blank"
          href="https://github.com/erindhoxha"
          rel="noreferrer"
          className={`${styles.navLeftLink} noselect`}
          aria-label="Visit my Github profile"
        >
          github
        </a>
      </div>
      <div className={styles.navLeftItem}>
        <a
          onMouseEnter={() => {
            setCursorVariantFn("text");
            setCursorText("go →");
          }}
          onMouseLeave={() => {
            setCursorVariantFn("default");
            setCursorText("");
          }}
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com/in/erindhoxha"
          className={`${styles.navLeftLink} noselect`}
          aria-label="Visit my LinkedIn profile"
        >
          LI
        </a>
      </div>
      <div className={styles.navLeftItem}>
        <a
          onMouseEnter={() => {
            setCursorVariantFn("text");
            setCursorText("go →");
          }}
          onMouseLeave={() => {
            setCursorVariantFn("default");
            setCursorText("");
          }}
          target="_blank"
          rel="noreferrer"
          href="https://medium.com/@erindhoxha"
          className={`${styles.navLeftLink} noselect`}
          aria-label="Visit my Medium profile and read my blogs"
        >
          MD
        </a>
      </div>
      <motion.div
        initial={initialLine}
        transition={{ duration: 0.75, delay: 0.5 }}
        animate="default"
        className={styles.navLine}
        variants={boxVariants}
      ></motion.div>
    </div>
  );
};

export default NavLeft;
