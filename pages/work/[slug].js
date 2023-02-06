import { useRouter } from "next/router";
import NavLeft from "../../components/NavLeft/NavLeft";
import PortfolioLeftDescription from "../../components/PortfolioLeftDescription/PortfolioLeftDescription";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import styles from "./slug.module.css";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/Projects/Projects";
import Image from "next/image";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return "There's no slug";
  }

  let boxVariants = {};
  let initialLeft = {};
  let initialRight = {};
  if (typeof window !== "undefined") {
    const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
    if (!isMobile) {
      boxVariants = {
        default: {
          opacity: 1,
          y: 0,
        },
      };
      initialLeft = { opacity: 0, y: -40 };
      initialRight = { opacity: 0, y: 40 };
    } //if the width >= 768px, boxVariants will be empty, resulting in no animation
    //you need to refresh the page, it doesn't work when you resize it!
  }

  return (
    <>
      <div className="slug">
        <Navbar />
        <div className={styles.slug}>
          <div className={`${styles.slugContainer} bg container-fluid`}>
            <div className={styles.navMobile}>
              <Navbar />
            </div>
            {/* <motion.div
            variants={boxVariants}
            animate="default"
            transition={{ duration: 1, delay: 0 }}
            initial={initial}
            className={styles.loader}
          ></motion.div>
          <motion.div
            variants={boxVariants}
            animate="default"
            transition={{ duration: 1, delay: 1 }}
            initial={initial}
            className={styles.loader2}
          ></motion.div> */}

            <NavLeft />
            <div className={styles.slugContainerInner}>
              <motion.div
                variants={boxVariants}
                animate="default"
                transition={{ duration: 0.5, delay: 0.5 }}
                initial={initialRight}
              >
                <h1>{post.title}</h1>
                <p className={styles.fadedP}>showcase_</p>
              </motion.div>

              <motion.div
                variants={boxVariants}
                animate="default"
                transition={{ duration: 0.5, delay: 0.7 }}
                initial={initialRight}
              >
                <h2 className={`mt-5`}>tools used</h2>
                <p className={styles.fadedP}>
                  ts, react, redux, figma, ai, contentful
                </p>
              </motion.div>

              <div className={styles.nameContainer}>
                <PortfolioLeftDescription
                  title=""
                  role="front-end, ui/ux"
                  link="wilsonart.co.nz"
                  href="https://wilsonart.co.nz"
                  location="auckland, nz"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.showcaseContainer} container-fluid`}></div>
      <Projects />
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
