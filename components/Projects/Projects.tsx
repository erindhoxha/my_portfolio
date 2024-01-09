import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Projects.module.css";
import wa from "../../images/wilsonart-100.jpg";
import primepanels from "../../images/primepanels-100.jpg";
import airways from "../../images/airways-100.jpg";
import nzpg from "../../images/nzpg.png";
import nzris from "../../images/nzris-100.jpg";
import atrax from "../../images/atrax-100.jpg";
import lineadelplata from "../../images/lineadelplata-100.jpg";
import mailfomo from "../../images/mailfomo-100.jpg";
import flatmately from "../../images/flatmately-100.jpg";
import urban from "../../images/99urban-100.jpg";
import tourism from "../../images/tourism-100.jpg";
import lobster from "../../images/lobster-100.jpg";
import daruma from "../../images/daruma-100.jpg";
import renkon from "../../images/renkon-100.jpg";
import yogawithkassandra from "../../images/yogawithkassandra-100.jpg";
import nxtstep from "../../images/nxtstep-100.jpg";
import dotapopquiz from "../../images/dotapopquiz-100.jpg";
import vidapp from "../../images/vidapp-100.jpg";
import debugcon from "../../images/debugcon-100.jpg";
import { useCursorContext } from "../../pages/_app";

export const projects = [
  {
    title: "debugCon",
    date: 2022,
    frameworks: "js, sass, html5, figma, ai, psd",
    location: "auckland, nz",
    image: debugcon,
    href: "/work/debugcon",
    id: 1,
  },
  {
    title: "airways nz",
    date: 2021,
    frameworks: "js, sass, html, axure rp7, ai, psd",
    location: "auckland, nz",
    image: airways,
    href: "/work/airways",
    id: 2,
  },
  {
    title: "nzris",
    date: 2021,
    frameworks: "js, html, css, UXPin, ai, psd",
    location: "auckland, nz",
    image: nzris,
    href: "/work/nzris",
    id: 3,
  },
  {
    title: "wilsonart",
    date: 2022,
    frameworks: "umbraco, js, html, sass, ai, psd",
    location: "auckland, nz",
    href: "/work/wilsonart",
    image: wa,
    id: 4,
  },
  {
    title: "scanatrax",
    date: 2021,
    frameworks: "js, html, css, sass, bootstrap, figma, ai, psd",
    location: "auckland, nz",
    href: "/work/scanatrax",
    image: atrax,
    id: 5,
  },
  {
    title: "mailfomo",
    date: 2021,
    frameworks: "typescript, react, node, contentful, ai, psd, figma",
    location: "sydney, au",
    href: "/work/mailfomo",
    image: mailfomo,
    id: 6,
  },
  {
    title: "primepanels",
    date: 2021,
    frameworks: "js, html, tailwind, figma",
    location: "auckland, nz",
    href: "/work/primepanels",
    image: primepanels,
    id: 7,
  },
  {
    title: "lineadelplata",
    date: 2021,
    frameworks: "js, html, tailwind, figma",
    location: "auckland, nz",
    image: lineadelplata,
    id: 8,
  },
  {
    title: "flatmately",
    date: 2021,
    frameworks: "js, html, tailwind, figma",
    location: "auckland, nz",
    image: flatmately,
    id: 9,
  },
  {
    title: "99urban",
    date: 2021,
    frameworks: "js, html, tailwind, figma",
    location: "auckland, nz",
    image: urban,
    id: 10,
  },
  {
    title: "tourism nz",
    date: 2021,
    frameworks: "js, html, tailwind, figma",
    location: "auckland, nz",
    image: tourism,
    id: 11,
  },
  {
    title: "lobster&tap",
    date: 2022,
    frameworks: "js, bootstrap, umbraco, figma, ai, psd",
    location: "auckland, nz",
    image: lobster,
    id: 12,
  },
  {
    title: "daruma",
    date: 2022,
    frameworks: "js, bootstrap, umbraco, figma, ai, psd",
    location: "auckland, nz",
    image: daruma,
    id: 13,
  },
  {
    title: "renkon",
    date: 2020,
    frameworks: "js, html, tailwind, figma",
    location: "auckland, nz",
    image: renkon,
    id: 14,
  },
  {
    title: "yoga with kassandra",
    date: 2021,
    frameworks: "js, html, sass, wordpress, ai, psd",
    location: "auckland, nz",
    image: yogawithkassandra,
    id: 15,
  },
  {
    title: "nxtstep",
    date: 2021,
    frameworks: "js, html, bootstrap, sketch, ai, psd",
    location: "auckland, nz",
    image: nxtstep,
    id: 16,
  },
  {
    title: "dotapopquiz",
    date: 2021,
    frameworks: "js, html, tailwind, figma",
    location: "auckland, nz",
    image: dotapopquiz,
    id: 17,
  },
  {
    title: "vidapp",
    date: 2021,
    frameworks: "wordpress, js, html, sass, ai, psd",
    location: "auckland, nz",
    image: vidapp,
    id: 18,
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
        <h2 className={styles.h1} aria-label="View my work">
          /work <p className="lead mb-0">recent_</p>
        </h2>
      </motion.div>

      <div className="row p-0 m-0">
        {projects.map((project) => (
          <article
            key={project.id}
            className={`col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 p-1 ${styles.portfolioContainer}`}
            aria-label={`Project about ${project.title} with tools used ${project.frameworks} at ${project.location}`}
          >
            <motion.div
              transition={{ duration: 0.5, delay: 0 }}
              initial={initialCards}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {project.href ? (
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
                  className={`${styles.link} link link-dark-thin-container w-100 no-underline`}
                >
                  <div className={styles.imgCover}>
                    <div className={styles.overlay}></div>
                    <Image
                      className={styles.img}
                      alt={`${project.title} project image, click to view more details.`}
                      src={project.image}
                      priority={project.image === nzpg}
                      unoptimized
                    />
                  </div>

                  <header className={styles.textContainer}>
                    <p
                      className="mb-1"
                      aria-label={`Project date is ${project.date} and tools used are ${project.frameworks} at ${project.location}`}
                    >
                      <span className={styles.lead}>
                        {project.date} / {project.frameworks} /{" "}
                        {project.location}
                      </span>
                    </p>
                    <h3 className={styles.h2}>{project.title}</h3>
                  </header>
                </Link>
              ) : (
                <>
                  <div className={styles.imgCover}>
                    <div className={styles.overlay}></div>
                    <Image
                      className={styles.img}
                      alt={`${project.title} project image, click to view more details.`}
                      src={project.image}
                      priority={project.image === nzpg}
                      unoptimized
                    />
                  </div>

                  <div className={styles.textContainer}>
                    <p
                      className="mb-1"
                      aria-label={`Project date is ${project.date} and tools used are ${project.frameworks} at ${project.location}`}
                    >
                      <span className={styles.lead}>
                        {project.date} / {project.frameworks} /{" "}
                        {project.location}
                      </span>
                    </p>
                    <h3 className={styles.h2}>{project.title}</h3>
                  </div>
                </>
              )}
            </motion.div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
