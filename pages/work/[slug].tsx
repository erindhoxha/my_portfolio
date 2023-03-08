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

  console.log(post);

  return (
    <>
      <div className="slug container-fluid">
        <Navbar />
        <div className={styles.slug}>
          <div className={`${styles.slugContainer} bg`}>
            <div className={styles.navMobile}>
              <Navbar />
            </div>

            <NavLeft />
            <div className={styles.slugContainerInner}>
              <motion.div
                variants={boxVariants}
                animate="default"
                transition={{ duration: 0.5, delay: 0.4 }}
                initial={initialRight}
              >
                <p className={styles.fadedP}>showcase_</p>
                <h1>{post.title}</h1>
              </motion.div>

              <motion.div
                variants={boxVariants}
                animate="default"
                transition={{ duration: 0.5, delay: 0.6 }}
                initial={initialRight}
              >
                <h2 className={`mt-5`}>tools used</h2>
                <p className={styles.fadedP}>{post.tools}</p>
              </motion.div>

              <motion.div
                variants={boxVariants}
                animate="default"
                transition={{ duration: 0.5, delay: 0.8 }}
                initial={initialRight}
              >
                <h2 className={`mt-5`}>year</h2>
                <p className={styles.fadedP}>2022</p>
              </motion.div>

              <div className={styles.nameContainer}>
                <PortfolioLeftDescription
                  title=""
                  role="front-end, ui/ux, user research, prototyping, UML"
                  link="wilsonart.co.nz"
                  href="https://wilsonart.co.nz"
                  location="auckland, nz"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.showcaseContainer} container-fluid`}>
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
      <Projects />
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "tools",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);

  const content = await markdownToHtml(post.content || "");

  console.log(content);

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
