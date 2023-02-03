import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Projects.module.css';
import Img from '../../public/img.jpg';
import debugConImg from '../../images/debugCon.svg';
import { useCursorContext } from '../../pages/_app';

const Projects = () => {
  const { setCursorVariantFn } = useCursorContext();

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
    <div className={`${styles.projectsContainer} container-fluid`} id="work">
      <motion.div
        variants={boxVariants}
        animate="default"
        transition={{ duration: 0.5, delay: 0.5 }}
        initial={initial}
      >
        <h1 className={styles.h1}>
          /work <p className="lead">recent_</p>
        </h1>
      </motion.div>

      <div className="row p-0 m-0">
        <div
          className={`col-12 col-md-6 col-lg-4 p-1 ${styles.portfolioContainer}`}
        >
          <motion.div
            transition={{ duration: 0.5, delay: 0 }}
            initial={initialCards}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.imgCover}>
              <Image
                className={styles.img}
                alt="portfolio image"
                src={debugConImg}
              />
            </div>

            <div className={styles.textContainer}>
              <Link
                onMouseEnter={() => setCursorVariantFn('textInImage')}
                onMouseLeave={() => setCursorVariantFn('default')}
                href="#"
                className="link link-dark-thin"
              >
                <lead>2023 / reactjs, redux, figma, ai, typescript</lead>
                <h1>
                  debugCon <lead>auckland, nz</lead>
                </h1>
              </Link>
            </div>
          </motion.div>
        </div>
        <div
          className={`col-12 col-md-6 col-lg-4 p-1 ${styles.portfolioContainer}`}
        >
          <motion.div
            transition={{ duration: 0.5, delay: 0.3 }}
            initial={initialCards}
            whileInView={whileInViewCards}
            viewport={{ once: true }}
          >
            <div className={styles.imgCover}>
              <Image
                className={styles.img}
                alt="portfolio image"
                src={debugConImg}
              />
            </div>

            <div className={styles.textContainer}>
              <Link
                onMouseEnter={() => setCursorVariantFn('textInImage')}
                onMouseLeave={() => setCursorVariantFn('default')}
                href="#"
                className="link link-dark-thin"
              >
                <lead>2023 / reactjs, redux, figma, ai, typescript</lead>
                <h1>
                  debugCon <lead>auckland, nz</lead>
                </h1>
              </Link>
            </div>
          </motion.div>
        </div>
        <div
          className={`col-12 col-md-6 col-lg-4 p-1 ${styles.portfolioContainer}`}
        >
          <motion.div
            transition={{ duration: 0.5, delay: 0.6 }}
            initial={initialCards}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.imgCover}>
              <Image
                className={styles.img}
                alt="portfolio image"
                src={debugConImg}
              />
            </div>

            <div className={styles.textContainer}>
              <Link
                onMouseEnter={() => setCursorVariantFn('textInImage')}
                onMouseLeave={() => setCursorVariantFn('default')}
                href="#"
                className="link link-dark-thin"
              >
                <lead>2023 / reactjs, redux, figma, ai, typescript</lead>
                <h1>
                  debugCon <lead>auckland, nz</lead>
                </h1>
              </Link>
            </div>
          </motion.div>
        </div>
        <div
          className={`col-12 col-md-6 col-lg-4 p-1 ${styles.portfolioContainer}`}
        >
          <motion.div
            transition={{ duration: 0.5, delay: 0.9 }}
            initial={initialCards}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.imgCover}>
              <Image
                className={styles.img}
                alt="portfolio image"
                src={debugConImg}
              />
            </div>

            <div className={styles.textContainer}>
              <Link
                onMouseEnter={() => setCursorVariantFn('textInImage')}
                onMouseLeave={() => setCursorVariantFn('default')}
                href="#"
                className="link link-dark-thin"
              >
                <lead>2023 / reactjs, redux, figma, ai, typescript</lead>
                <h1>
                  debugCon <lead>auckland, nz</lead>
                </h1>
              </Link>
            </div>
          </motion.div>
        </div>
        <div
          className={`col-12 col-md-6 col-lg-4 p-1 ${styles.portfolioContainer}`}
        >
          <motion.div
            transition={{ duration: 0.5, delay: 1.2 }}
            initial={initialCards}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.imgCover}>
              <Image
                className={styles.img}
                alt="portfolio image"
                src={debugConImg}
              />
            </div>

            <div className={styles.textContainer}>
              <Link
                onMouseEnter={() => setCursorVariantFn('textInImage')}
                onMouseLeave={() => setCursorVariantFn('default')}
                href="#"
                className="link link-dark-thin"
              >
                <lead>2023 / reactjs, redux, figma, ai, typescript</lead>
                <h1>
                  debugCon <lead>auckland, nz</lead>
                </h1>
              </Link>
            </div>
          </motion.div>
        </div>
        <div
          className={`col-12 col-md-6 col-lg-4 p-1 ${styles.portfolioContainer}`}
        >
          <motion.div
            transition={{ duration: 0.5, delay: 1.5 }}
            initial={initialCards}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.imgCover}>
              <Image
                className={styles.img}
                alt="portfolio image"
                src={debugConImg}
              />
            </div>

            <div className={styles.textContainer}>
              <Link
                onMouseEnter={() => setCursorVariantFn('textInImage')}
                onMouseLeave={() => setCursorVariantFn('default')}
                href="#"
                className="link link-dark-thin"
              >
                <lead>2023 / reactjs, redux, figma, ai, typescript</lead>
                <h1>
                  debugCon <lead>auckland, nz</lead>
                </h1>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
