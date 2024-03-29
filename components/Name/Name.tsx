import React from "react";
import { useCursorContext } from "../../pages/_app";
import styles from "./Name.module.css";
import { motion } from "framer-motion";
import YearDate from "../YearDate/YearDate";

const Name = () => {
  const { setCursorVariantFn, setCursorText } = useCursorContext();
  let boxVariants = {};
  let initial = {};
  if (typeof window !== "undefined") {
    const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
    if (!isMobile) {
      boxVariants = {
        default: {
          opacity: 1,
          x: 0,
        },
      };
      initial = { opacity: 0, x: -30 };
    } //if the width >= 768px, boxVariants will be empty, resulting in no animation
    //you need to refresh the page, it doesn't work when you resize it!
  }
  return (
    <div className={styles.nameContainer}>
      <div className="content">
        <motion.div
          variants={boxVariants}
          animate="default"
          transition={{ duration: 0.5, delay: 0.7 }}
          initial={initial}
        >
          <div>{/* TODO: Add name here */}</div>
        </motion.div>
        <div>
          <div className={styles.box}>
            <motion.div
              variants={boxVariants}
              animate="default"
              transition={{ duration: 0.5, delay: 1 }}
              initial={initial}
            >
              <div className={styles.innerBox}>
                <h2
                  className={`${styles.h2}`}
                  title="Did you know that Hoxha means 'mentor' in Albanian?"
                  aria-label="My name, Erind Hoxha, a Front-End developer based in Sydney, Australia."
                >
                  Erind Hoxha
                </h2>
                {/* <p aria-label="What I do: Frontend Development and UI/UX.">
                  Front-end Engineer & UI/UX
                </p> */}
                <p
                  className={`${styles.lineHeightNormal} mb-0`}
                  aria-label="Currently working at Kablamo, a consultancy company based in Sydney."
                >
                  Front-end Engineer & UI/UX
                  {/* <p
                    className="link line-through semibold"
                    onMouseEnter={() => {
                      setCursorVariantFn('text');
                      setCursorText('go →');
                    }}
                    onMouseLeave={() => {
                      setCursorVariantFn('default');
                      setCursorText('');
                    }}
                  > */}
                  {/* </p> */}
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={boxVariants}
              animate="default"
              transition={{ duration: 0.5, delay: 1 }}
              initial={initial}
            >
              <div className={styles.innerBox}>
                {/* <p>London, UK</p> */}
                {/* <p>React, React Native, Typescript</p> */}
                <p>
                  <a
                    className="link line-through semibold no-underline"
                    target="_blank"
                    rel="noreferrer"
                    href="https://drive.google.com/file/d/1qP1prUVJttSdJOXb5Duxs5b9067kavIk/view?usp=drive_link"
                    onMouseEnter={() => {
                      setCursorVariantFn("textSmall");
                      setCursorText("View CV");
                    }}
                    onMouseLeave={() => {
                      setCursorVariantFn("default");
                      setCursorText("");
                    }}
                  >
                    View my resume →
                  </a>
                </p>

                <p className={`${styles.lineHeightNormal} mb-0`}>
                  <a
                    className="link line-through semibold no-underline"
                    href="mailto:hello@erindhoxha.dev"
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => {
                      setCursorVariantFn("textSmall");
                      setCursorText("Email");
                    }}
                    onMouseLeave={() => {
                      setCursorVariantFn("default");
                      setCursorText("");
                    }}
                  >
                    hello@erindhoxha.dev
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <span className={styles.qotd}>
          {/* Currently looking for a new opportunity */}
          <p className={styles.lead}>social_</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/erindoxa"
            aria-label="View my twitter profile"
            onMouseEnter={() => {
              setCursorVariantFn("textSmall");
              setCursorText("Twitter");
            }}
            onMouseLeave={() => {
              setCursorVariantFn("default");
              setCursorText("");
            }}
          >
            twitter
          </a>{" "}
          /{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/erindhox"
            aria-label="View my instagram profile"
            onMouseEnter={() => {
              setCursorVariantFn("textSmall");
              setCursorText("Instagram");
            }}
            onMouseLeave={() => {
              setCursorVariantFn("default");
              setCursorText("");
            }}
          >
            instagram
          </a>{" "}
          /{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://facebook.com/hoxhaerind"
            aria-label="View my facebook profile"
            onMouseEnter={() => {
              setCursorVariantFn("textSmall");
              setCursorText("Facebook");
            }}
            onMouseLeave={() => {
              setCursorVariantFn("default");
              setCursorText("");
            }}
          >
            facebook
          </a>{" "}
        </span>
        <YearDate year="2024" />
      </div>
    </div>
  );
};

export default Name;
