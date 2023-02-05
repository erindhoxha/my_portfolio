import { useRouter } from "next/router";
import Name from "../../components/Name/Name";
import NavLeft from "../../components/NavLeft/NavLeft";
import PortfolioLeftDescription from "../../components/PortfolioLeftDescription/PortfolioLeftDescription";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import styles from "./slug.module.css";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/Projects/Projects";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return "There's no slug";
  }

  let boxVariants = {
    default: {
      height: "0vh",
    },
  };
  let initial = { height: "100vh" };

  return (
    <>
      <div className={styles.slug}>
        <div className={`${styles.slugContainer} bg container-fluid`}>
          <div className={styles.navMobile}>
            <Navbar />
          </div>
          <motion.div
            variants={boxVariants}
            animate="default"
            transition={{ duration: 0.36, delay: 0.6 }}
            initial={initial}
            className={styles.loader2}
          ></motion.div>
          <motion.div
            variants={boxVariants}
            animate="default"
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={initial}
            className={styles.loader}
          ></motion.div>
          <NavLeft />
          <div className={styles.slugContainerInner}>
            <h1>{post.title}</h1>
            <p className={styles.fadedP}>showcase_</p>
            <h2 className={`mt-5`}>tools used</h2>
            <p className={styles.fadedP}>
              ts, react, redux, figma, ai, contentful
            </p>
            <div className={styles.nameContainer}>
              <PortfolioLeftDescription
                title="wilsonart"
                role="front-end, ui/ux"
                link="wilsonart.co.nz"
                href="https://wilsonart.co.nz"
                location="auckland, nz"
              />
            </div>
          </div>
        </div>
      </div>
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
