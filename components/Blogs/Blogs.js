import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Blogs.module.css";
import blog1 from "../../images/blog1.webp";
import blog2 from "../../images/blog2.gif";
import debugConImg from "../../images/debugCon.svg";
import { useCursorContext } from "../../pages/_app";

const blogs = [
  {
    title: "New CSS Property: aspect-ratio",
    date: 2022,
    frameworks: "css, aspect-ratio / medium",
    image: blog1,
    href: "#",
    id: 144,
  },
  {
    title: "Create animated icon on Adobe Illustrator for Web",
    date: 2022,
    frameworks: "ai, svg, web / medium",
    image: blog2,
    href: "#",
    id: 145,
  },
];

const Blogs = () => {
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
    } //if the width >= 768px, boxVariants will be empty, resulting in no animation
    //you need to refresh the page, it doesn't work when you resize it!
  }

  return (
    <div className={`${styles.projectsContainer} container-fluid`} id="blog">
      <motion.div
        variants={boxVariants}
        animate="default"
        transition={{ duration: 0.5, delay: 0.5 }}
        initial={initial}
      >
        <h1 className={styles.h1}>
          /blog <p className="lead mb-0">recent_</p>
        </h1>
      </motion.div>

      <div className="row p-0 m-0">
        {blogs.map((project) => (
          <div
            key={project.id}
            className={`col-12 col-sm-6 col-md-6 col-lg-3 p-1 ${styles.portfolioContainer}`}
          >
            <motion.div
              transition={{ duration: 0.5, delay: 0 }}
              initial={initialCards}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link
                onMouseEnter={() => {
                  setCursorVariantFn("text");
                  setCursorText("view →");
                }}
                onMouseLeave={() => {
                  setCursorVariantFn("default");
                  setCursorText("");
                }}
                href={project.href}
                className={`${styles.link} link link-dark-thin-container w-100`}
              >
                <div className={styles.imgCover}>
                  <div className={styles.overlay}></div>
                  <Image
                    className={styles.img}
                    alt="portfolio image"
                    src={project.image}
                  />
                </div>

                <div className={styles.textContainer}>
                  <p className="mb-1">
                    <lead>
                      {project.date} / {project.frameworks}
                    </lead>
                  </p>
                  <h2>{project.title}</h2>
                </div>
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
