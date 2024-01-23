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
import kablamo from "../../images/kablamo-100.jpg";
import { useCursorContext } from "../../pages/_app";

export const projects = [
  {
    title: "Kablamo",
    date: 2024,
    frameworks: "react, react native, typescript, rquery, jest, storybook",
    location: "sydney, au",
    // tools: "react, ts, rquery, jest, storybook, git",
    image: kablamo,
    description:
      "Kablamo is a digital product and innovation company. One of the projects I've worked on is a known bank in Canada, an app for iOS and Android built with React Native.",
  },
  {
    title: "Mailfomo",
    date: 2023,
    frameworks: "typescript, react, node, sass, tailwind, ai, psd, figma",
    location: "sydney, au",
    href: "/work/mailfomo",
    image: mailfomo,
    description:
      "Mailfomo is a daily top links aggregator, sending you the most popular links of the day to your email. The goal was to create a simple and easy to use app, with a focus to never miss the latest news.",
  },
  // {
  //   title: "Eventfomo",
  //   date: 2023,
  //   frameworks: "typescript, react, node, sass, tailwind, ai, psd, figma",
  //   location: "sydney, au",
  //   href: "/work/mailfomo",
  //   image: mailfomo,
  //   description:
  //     "Eventfomo is a daily top events aggregator, sending you reminders of the latest gaming events. Subscribed users can also add their own events.",
  // },
  // {
  //   title: "fishmarkets / lobster&tap",
  //   date: 2022,
  //   frameworks: "react, js, redux, html, sass, ai, sketch",
  //   location: "auckland, nz",
  //   href: "/work/fishmarkets",
  //   image: wa,
  // },
  {
    title: "WilsonArt",
    date: 2022,
    frameworks: "javascript, html5, sass, ai, psd, umbracoCMS",
    location: "auckland, nz",
    href: "/work/wilsonart",
    // tools: "js, sass, xd, bootstrap, sketch, git",
    image: wa,
    description:
      "Wilsonart, a leader in decorative laminates, engaged me to design and develop their website for the New Zealand market. The website is built with Umbraco CMS, and it's fully responsive.",
  },
  {
    title: "Lobster&Tap",
    date: 2022,
    frameworks: "javascript, bootstrap, figma, ai, psd, umbracoCMS",
    location: "auckland, nz",
    // tools: "react, js, jest, sass, xd, bootstrap, sketch",
    image: lobster,
    description:
      "Lobster&Tap is a seafood restaurant in Auckland, NZ, Lobster&Tap engaged me to design and develop their Kiosk web-app which allows customers to order food and drinks.",
  },
  {
    title: "DebugCon I & II",
    date: 2022,
    frameworks: "js, sass, html5, figma, ai, psd",
    location: "auckland, nz",
    // tools: "js, jest, handlebars_logo, sass, bootstrap, xd, ai, psd, sketch",
    image: debugcon,
    href: "/work/debugcon",
    description:
      "DebugCon is a coding conference for developers held in Prishtina, Kosovo. I was tasked to design and develop their website, also helped with branding and marketing.",
  },
  {
    title: "Daruma",
    date: 2022,
    frameworks: "js, bootstrap, umbraco, figma, ai, psd",
    location: "auckland, nz",
    image: daruma,
    description:
      "Daruma is a Japanese restaurant in Auckland, NZ. I was tasked to develop their Kiosk web-app which allows customers to order food and drinks.",
  },
  {
    title: "Prime Panels Showroom",
    date: 2022,
    frameworks: "js, html, tailwind, figma",
    location: "auckland, nz",
    href: "/work/primepanels",
    image: primepanels,
    description:
      "Prime Panels is a leading manufacturer of melamine panels. I was tasked to design and develop their showroom website. The website was shown at the Auckland Home Show 2021.",
  },
  {
    title: "Linea Del Plata",
    date: 2022,
    frameworks: "js, html, tailwind, figma",
    location: "auckland, nz",
    image: lineadelplata,
    description:
      "Linea Del Plata is a shipping company made up of private business groups with a long history in the maritime industry. I was tasked to design and develop their booking platform.",
  },
  {
    title: "99urban",
    date: 2021,
    frameworks: "react, shopify, liquid, jest, ai, psd",
    location: "auckland, nz",
    href: "/work/99urban",
    // tools: "react, shopify, liquid2, jest, ai, psd",
    image: urban,
    description:
      "99Urban is a streetwear brand, built by me, using Shopify. I designed and developed the website, worked with marketing and dove into the world of SEO and Dropshipping.",
  },
  {
    title: "Airways New Zealand",
    date: 2021,
    frameworks: "js, sass, html, axure rp7, ai, psd",
    location: "auckland, nz",
    image: airways,
    href: "/work/airways",
    description:
      "Airways is New Zealand's leading air navigation service provider. I was tasked to design and develop their air trafic controller manuals and showcasing a new way of how to navigate through them.",
  },
  {
    title: "NZ Research Information System",
    date: 2021,
    frameworks: "js, html, css, uxpin, ai, psd",
    location: "auckland, nz",
    image: nzris,
    href: "/work/nzris",
    description:
      "NZRIS is a web application for the New Zealand government. I was tasked with creating a digital solution for NZRIS, a new online hub dedicated to the research, science, and innovation sector.",
  },
  {
    title: "Scanatrax",
    date: 2021,
    frameworks: "js, html, css, sass, bootstrap, figma, ai, psd",
    location: "auckland, nz",
    href: "/work/scanatrax",
    image: atrax,
    description:
      "Scanatrax is a static pallet and cargo dimensioning system that delivers fast, accurate and reliable results, with full after-sales support. I was tasked to design and develop their website.",
  },
  {
    title: "Flatmately",
    date: 2021,
    frameworks: "js, html, tailwind, figma",
    location: "auckland, nz",
    image: flatmately,
    description:
      "Flatmately is a flatmate finder app, built for New Zealand and Australian market. I was tasked to design and develop their website, and also helped with branding and marketing.",
  },
  {
    title: "NxtStep",
    date: 2021,
    frameworks: "js, html, bootstrap, sketch, ai, psd",
    location: "auckland, nz",
    image: nxtstep,
    description:
      "NxtStep is a job board for students and graduates. I was tasked to design and develop their website, and also helped with branding and marketing.",
  },
  {
    title: "Yoga With Kassandra",
    date: 2020,
    frameworks: "js, html, sass, wordpress, ai, psd",
    location: "auckland, nz",
    image: yogawithkassandra,
    description:
      "Yoga With Kassandra is a yoga teacher and content creator. I was tasked to design and develop her website and courses platform while I was working at VidApp.",
  },
  {
    title: "Tourism New Zealand",
    date: 2020,
    frameworks: "js, html5, css3, sass, bootstrap, sketch",
    location: "auckland, nz",
    image: tourism,
    description:
      "Tourism New Zealand is a website I've built to showcase my skills utilising JavaScript, HTML5, CSS3, SASS, Bootstrap, Sketch. I was tasked to design and develop their website.",
  },
  {
    title: "Renkon",
    date: 2020,
    frameworks: "js, html5, css3, sass, bootstrap, handlebars, sketch",
    location: "auckland, nz",
    image: renkon,
    description:
      "Renkon is a Japanese restaurant, I've pitched the new website and design for the ordering app. I used JavaScript, HTML5, CSS3, SASS, Handlebars and Bootstrap to build the website.",
  },
  {
    title: "DotaPopQuiz",
    date: 2020,
    frameworks: "js, html5, css3, sass, php, bootstrap, sketch",
    location: "auckland, nz",
    image: dotapopquiz,
    description:
      "DotaPopQuiz is a quiz app built with JavaScript, HTML5, SASS, PHP. It was built as a fun project to make a game to increase brand awareness and to learn more about JavaScript and PHP.",
  },
  {
    title: "VidApp",
    date: 2019,
    frameworks: "wordpress, js, html, sass, ai, psd",
    location: "auckland, nz",
    image: vidapp,
    description:
      "VidApp is a video streaming platform. I was tasked to design and develop their website and the platform where users would publish their customised app for iOS and Android.",
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
        {projects.map((project, index) => (
          <article
            key={project.title}
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
                    <h3 className={styles.h2}>{project.title}</h3>
                    <p
                      className={`mb-1 ${styles.pSeparator}`}
                      aria-label={`Project date is ${project.date} and tools used are ${project.frameworks} at ${project.location}`}
                    >
                      <span className={styles.lead}>{project.frameworks}</span>
                    </p>

                    <p>{project.description}</p>

                    {/* {project.tools
                      ? project.tools
                          .split(", ")
                          .map((tool, index) => (
                            <Image
                              className={styles.framework}
                              width={15}
                              height={15}
                              unoptimized
                              quality={100}
                              key={index}
                              alt=""
                              src={`/frameworks/${tool}.png`}
                            />
                          ))
                      : null} */}
                  </header>
                </Link>
              ) : (
                <>
                  <div className={styles.imgCover}>
                    <div className={styles.overlay}></div>
                    <div className="img-group">
                      <h4 className={styles.pill}>Case study incoming</h4>
                      <Image
                        className={styles.img}
                        alt={`${project.title} project image, click to view more details.`}
                        src={project.image}
                        priority={project.image === nzpg}
                        unoptimized
                      />
                    </div>
                  </div>

                  <div className={styles.textContainer}>
                    <h3 className={styles.h2}>{project.title}</h3>
                    <p
                      className={`mb-1 ${styles.pSeparator}`}
                      aria-label={`Project date is ${project.date} and tools used are ${project.frameworks} at ${project.location}`}
                    >
                      <span className={styles.lead}>{project.frameworks}</span>
                    </p>

                    <p>{project.description}</p>

                    {/* {project.tools
                      ? project.tools
                          .split(", ")
                          .map((tool, index) => (
                            <Image
                              className={styles.framework}
                              width={15}
                              height={15}
                              unoptimized
                              quality={100}
                              key={index}
                              alt=""
                              src={`/frameworks/${tool}.png`}
                            />
                          ))
                      : null} */}
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
