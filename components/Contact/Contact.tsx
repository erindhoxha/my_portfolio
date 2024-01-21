import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { useCursorContext } from "../../pages/_app";

const Contact = () => {
  const { setCursorVariantFn, setCursorText } = useCursorContext();

  let boxVariants = {};
  let initial = {};
  let initialCards = {};
  let whileInViewCards = {};
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
      initialCards = { opacity: 0, y: 20 };
      whileInViewCards = { opacity: 1, y: 0 };
    }
  }

  return (
    <div className={`${styles.projectsContainer} container-fluid`} id="contact">
      <motion.div
        variants={boxVariants}
        animate="default"
        transition={{ duration: 0.5, delay: 0.5 }}
        initial={initial}
      >
        <h2 className={styles.h1} aria-label="Contact me">
          /contact
        </h2>
        <div className="flex">
          <a
            href="mailto:hello@erindhoxha.dev"
            target="_blank"
            rel="noreferrer"
            className="lead mb-0 font-regular text-regular text-decoration-underline me-2"
            aria-label="Email me at hello@erindhoxha.dev, or click here."
            onMouseEnter={() => {
              setCursorVariantFn("text");
              setCursorText("email me");
            }}
            onMouseLeave={() => {
              setCursorVariantFn("default");
              setCursorText("");
            }}
          >
            <p className="text-decoration-underline">email</p>
          </a>
          {/* Add the links here */}
          <a className="no-underline"> / </a>
          <a
            href="https://linkedin.com/in/erindhoxha"
            target="_blank"
            rel="noreferrer"
            className="lead mb-0 font-regular text-regular text-decoration-underline mx-2"
            aria-label="Link to my LinkedIn profile."
            onMouseEnter={() => {
              setCursorVariantFn("text");
              setCursorText("linkedin");
            }}
            onMouseLeave={() => {
              setCursorVariantFn("default");
              setCursorText("");
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
