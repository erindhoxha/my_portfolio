import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Projects.module.css';
import Img from '../../public/img.jpg';
import { useCursorContext } from '../../pages/_app';

const Projects = () => {
  const { setCursorVariantFn } = useCursorContext();
  return (
    <div className={`${styles.projectsContainer} container-fluid`}>
      <div className="row">
        <div className="row">
          <h1 className={styles.h1}>Some things I&apos;ve built</h1>
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
                className="link link-light"
              >
                <lead>2023</lead>
                <h1>Fishmarkets</h1>
                <p>react - nextjs - redux - figma - ai</p>
              </Link>
            </div>

            <Image className={styles.img} alt="portfolio image" src={Img} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
