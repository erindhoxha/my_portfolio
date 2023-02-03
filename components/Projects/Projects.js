import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Projects.module.css';
import Img from '../../public/img.jpg';
import debugConImg from '../../images/debugCon.svg';
import { useCursorContext } from '../../pages/_app';

const Projects = () => {
  const { setCursorVariantFn } = useCursorContext();
  return (
    <div className={`${styles.projectsContainer} container-fluid`}>
      <motion.div
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h1 className={styles.h1}>
          work <p className="lead">recent_</p>
        </h1>
      </motion.div>

      <div className="row p-0 m-0">
        <div
          className={`col-12 col-md-6 col-lg-4 p-1 ${styles.portfolioContainer}`}
        >
          <motion.div
            transition={{ duration: 0.5, delay: 0 }}
            initial={{ opacity: 0, y: 20 }}
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
            initial={{ opacity: 0, y: 20 }}
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
            transition={{ duration: 0.5, delay: 0.6 }}
            initial={{ opacity: 0, y: 20 }}
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
            initial={{ opacity: 0, y: 20 }}
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
            initial={{ opacity: 0, y: 20 }}
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
            initial={{ opacity: 0, y: 20 }}
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
