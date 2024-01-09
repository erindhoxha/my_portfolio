import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Blogs.module.css";
import blog1 from "../../images/blog1.webp";
import blog2 from "../../images/blog2.gif";
import { useCursorContext } from "../../pages/_app";

const blogs = [
  {
    title: "new css property: aspect-ratio",
    date: 2022,
    frameworks: "css, aspect-ratio / medium",
    image: blog1,
    href: "https://medium.com/@erindhoxha/new-css-property-aspect-ratio-8ce62fea95d7",
    id: 144,
  },
  {
    title: "create animated icon on ai for web",
    date: 2022,
    frameworks: "ai, svg, web / medium",
    image: blog2,
    href: "https://medium.com/@erindhoxha/how-to-create-an-animated-icon-on-adobe-illustrator-for-web-29ebadcbe879",
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
        <h2 className={styles.h1} aria-label="View my blogs">
          /blog <p className="lead mb-0">recent_</p>
        </h2>
      </motion.div>

      <div className="row p-0 m-0">
        {blogs.map((project) => (
          <article
            key={project.id}
            className={`col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-1 ${styles.portfolioContainer}`}
            aria-label={`Blog that I wrote about ${project.title}`}
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
                target="_blank"
                rel="noreferrer"
                className={`${styles.link} link link-dark-thin-container w-100 no-underline`}
              >
                <div className={styles.imgCover}>
                  <div className={styles.overlay}></div>
                  <Image
                    className={styles.img}
                    alt={`${project.title} image for the blog, click to view more details.`}
                    src={project.image}
                  />
                </div>

                <header className={styles.textContainer}>
                  <p className={`${styles.lead} mb-1`}>
                    {project.date} / {project.frameworks}
                  </p>
                  <h3 className={styles.h3}>{project.title}</h3>
                </header>
              </Link>
            </motion.div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
