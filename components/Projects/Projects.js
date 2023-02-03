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
      <h1 className={styles.h1}>Some things I&apos;ve built</h1>
      <div className="row">
        <div
          className={`col-12 col-md-6 col-lg-4 m-0 p-1 ${styles.portfolioContainer}`}
        >
          <motion.div
            style={{ height: '100%' }}
            animate={{ y: 0 }}
            transition={{
              y: { duration: 0.4 },
              default: { ease: 'easeInOut' },
            }}
          >
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

            <div className={styles.imgCover}>
              <Image
                className={styles.img}
                alt="portfolio image"
                src={debugConImg}
              />
            </div>
          </motion.div>
        </div>
        <div
          className={`col-12 col-md-6 col-lg-4 m-0 p-1 ${styles.portfolioContainer}`}
        >
          <motion.div
            style={{ height: '100%' }}
            animate={{ y: 0 }}
            transition={{
              y: { duration: 0.4 },
              default: { ease: 'easeInOut' },
            }}
          >
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

            <div className={styles.imgCover}>
              <Image
                className={styles.img}
                alt="portfolio image"
                src={debugConImg}
              />
            </div>
          </motion.div>
        </div>
        <div
          className={`col-12 col-md-6 col-lg-4 m-0 p-1 ${styles.portfolioContainer}`}
        >
          <motion.div
            style={{ height: '100%' }}
            animate={{ y: 0 }}
            transition={{
              y: { duration: 0.4 },
              default: { ease: 'easeInOut' },
            }}
          >
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

            <div className={styles.imgCover}>
              <Image
                className={styles.img}
                alt="portfolio image"
                src={debugConImg}
              />
            </div>
          </motion.div>
        </div>
        <div
          className={`col-12 col-md-6 col-lg-4 m-0 p-1 ${styles.portfolioContainer}`}
        >
          <motion.div
            style={{ height: '100%' }}
            animate={{ y: 0 }}
            transition={{
              y: { duration: 0.4 },
              default: { ease: 'easeInOut' },
            }}
          >
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

            <div className={styles.imgCover}>
              <Image
                className={styles.img}
                alt="portfolio image"
                src={debugConImg}
              />
            </div>
          </motion.div>
        </div>
        <div
          className={`col-12 col-md-6 col-lg-4 m-0 p-1 ${styles.portfolioContainer}`}
        >
          <motion.div
            style={{ height: '100%' }}
            animate={{ y: 0 }}
            transition={{
              y: { duration: 0.4 },
              default: { ease: 'easeInOut' },
            }}
          >
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

            <div className={styles.imgCover}>
              <Image
                className={styles.img}
                alt="portfolio image"
                src={debugConImg}
              />
            </div>
          </motion.div>
        </div>
        <div
          className={`col-12 col-md-6 col-lg-4 m-0 p-1 ${styles.portfolioContainer}`}
        >
          <motion.div
            style={{ height: '100%' }}
            animate={{ y: 0 }}
            transition={{
              y: { duration: 0.4 },
              default: { ease: 'easeInOut' },
            }}
          >
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

            <div className={styles.imgCover}>
              <Image
                className={styles.img}
                alt="portfolio image"
                src={debugConImg}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
