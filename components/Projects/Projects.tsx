import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Projects.module.css";
import Img from "../../public/img.jpg";
import sfg from "../../images/sfg.png";
import wa from "../../images/wa.png";
import nzpg from "../../images/nzpg.png";
import aw from "../../images/aw.png";
import ppanels from "../../images/ppanels.png";
import debugConImg from "../../images/debugCon.svg";
import debugCon from "../../images/debugCon2.png";
import { useCursorContext } from "../../pages/_app";

export const projects = [
  {
    title: "debugCon",
    date: 2022,
    frameworks: "js, ts, wp, ai, psd, sass, graphic",
    location: "auckland, nz",
    image: debugCon,
    href: "/work/debugCon",
    id: 1,
  },
  {
    title: "primepanels",
    date: 2023,
    frameworks: "js, ts, wp, ai, psd, sass",
    location: "auckland, nz",
    image: wa,
    href: "#",
    id: 2,
  },
  {
    title: "wilsonart",
    date: 2023,
    frameworks: "js, ts, wp, ai, psd, sass",
    location: "auckland, nz",
    image: wa,
    href: "/work/wilsonart",
    id: 3,
  },
];

const Projects = () => {
  const { setCursorVariantFn, setCursorText } = useCursorContext();

  let initial = {};
  let initialCards = {};
  let whileInViewCards = {};
  let boxVariants = {};
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
    <div className={`${styles.projectsContainer} container-fluid`} id="work">
      <motion.div
        variants={boxVariants}
        animate="default"
        transition={{ duration: 0.5, delay: 0.5 }}
        initial={initial}
      >
        <h1 className={styles.h1}>
          /work <p className="lead mb-0">recent_</p>
        </h1>
      </motion.div>

      <div className="row p-0 m-0">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`col-12 col-sm-6 col-md-4 col-lg-3 p-1 ${styles.portfolioContainer}`}
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
                onClick={() => {
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
                    priority={project.image === nzpg}
                  />
                </div>

                <div className={styles.textContainer}>
                  <p className="mb-1">
                    <span className={styles.lead}>
                      {project.date} / {project.frameworks} / {project.location}
                    </span>
                  </p>
                  <h3 className={styles.h2}>{project.title}</h3>
                </div>
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
