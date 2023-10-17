import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Contact.module.css';
import { useCursorContext } from '../../pages/_app';

const Contact = () => {
 const { setCursorVariantFn, setCursorText } = useCursorContext();

 let boxVariants = {};
 let initial = {};
 let initialCards = {};
 let whileInViewCards = {};
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
   initialCards = { opacity: 0, y: 20 };
   whileInViewCards = { opacity: 1, y: 0 };
  } //if the width >= 768px, boxVariants will be empty, resulting in no animation
  //you need to refresh the page, it doesn't work when you resize it!
 }

 return (
  <div className={`${styles.projectsContainer} container-fluid`} id="contact">
   <motion.div
    variants={boxVariants}
    animate="default"
    transition={{ duration: 0.5, delay: 0.5 }}
    initial={initial}
   >
    <h2 className={styles.h1}>/contact</h2>
    <div className="flex">
     <a
      href="mailto:hello@erindhoxha.dev"
      target="_blank"
      rel="noreferrer"
      className="lead mb-0 font-regular text-regular text-decoration-underline me-2"
      onMouseEnter={() => {
       setCursorVariantFn('text');
       setCursorText('email me');
      }}
      onMouseLeave={() => {
       setCursorVariantFn('default');
       setCursorText('');
      }}
     >
      <p className="text-decoration-underline">email</p>
     </a>
     <a> / </a>
     <a
      href="https://linkedin.com/in/erindhoxha"
      target="_blank"
      rel="noreferrer"
      className="lead mb-0 font-regular text-regular text-decoration-underline mx-2"
      onMouseEnter={() => {
       setCursorVariantFn('text');
       setCursorText('linkedin');
      }}
      onMouseLeave={() => {
       setCursorVariantFn('default');
       setCursorText('');
      }}
     >
      <p className="text-decoration-underline">linkedin</p>
     </a>
    </div>
   </motion.div>

   <div className="row p-0 m-0"></div>
  </div>
 );
};

export default Contact;
