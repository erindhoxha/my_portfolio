import React from 'react';
import { useCursorContext } from '../../pages/_app';
import styles from './Name.module.css';
import { motion } from 'framer-motion';
import YearDate from '../YearDate/YearDate';

const Name = () => {
 const { setCursorVariantFn, setCursorText } = useCursorContext();
 let boxVariants = {};
 let initial = {};
 if (typeof window !== 'undefined') {
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
     <div>
      <h2
       className={`${styles.h2} lowercase`}
       title="Did you know that Hoxha means 'mentor' in Albanian?"
      >
       Erind Hoxha
      </h2>
     </div>
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
        <p>front-end, ui/ux</p>
        <p className="mb-0">
         Currently working at{' '}
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
         Kablamo
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
        <p>Sydney, Australia</p>

        <p className="mb-0">
         <a
          className="link line-through semibold"
          href="mailto:hello@erindhoxha.dev"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => {
           setCursorVariantFn('text');
           setCursorText('email me');
          }}
          onMouseLeave={() => {
           setCursorVariantFn('default');
           setCursorText('');
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
     available for freelance work
     <p className={styles.lead}>social_</p>
     <a target="_blank" rel="noreferrer" href="https://github.com/erindhoxha">
      twitter
     </a>{' '}
     /{' '}
     <a target="_blank" rel="noreferrer" href="https://instagram.com/erindhox">
      insta
     </a>{' '}
     /{' '}
     <a target="_blank" rel="noreferrer" href="https://facebook.com/hoxhaerind">
      fb
     </a>{' '}
    </span>
    <YearDate year="2023" />
   </div>
  </div>
 );
};

export default Name;
