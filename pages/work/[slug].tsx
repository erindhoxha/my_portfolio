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
import Head from "next/head";

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

  const title = post.title.charAt(0).toUpperCase() + post.title.slice(1);

  return (
    <>
      <Head>
        <title>{title} - Case study</title>
        <meta name="description" content={`Case study about ${title}`} />
        <meta property="og:title" content={`${title} - Case study`} />
      </Head>
      <div className="slug container-fluid">
        <Navbar isHomePage={false} />
        <div className={styles.slug}>
          <div className={`${styles.slugContainer} bg`}>
            <div className={styles.navMobile}>
              <Navbar isHomePage={false} />
            </div>

            <NavLeft />
            <div className={styles.slugContainerInner}>
              <div className="wrapper">
                <div className="wrapper--inner">
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
                    <p className={styles.fadedP}>{post.year}</p>
                  </motion.div>
                </div>
              </div>

              {post.cta && (
                <motion.div
                  variants={boxVariants}
                  animate="default"
                  transition={{ duration: 0.5, delay: 1 }}
                  initial={initialRight}
                  className={`${styles.cta} mt-4`}
                >
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline rounded py-3 px-5 no-underline"
                  >
                    {post.urlName}
                  </a>
                </motion.div>
              )}
              {/* 
              {post.cta2 && (
                <motion.div
                  variants={boxVariants}
                  animate="default"
                  transition={{ duration: 0.5, delay: 1 }}
                  initial={initialRight}
                  className={`${styles.cta} mt-4`}
                >
                  <a
                    href={post.url2}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-underline rounded py-3 px-5"
                  >
                    {post.urlName2}
                  </a>
                </motion.div>
              )} */}

              <div className={styles.nameContainer}>
                <PortfolioLeftDescription
                  title=""
                  role={post.role}
                  cta={post.cta}
                  link={post.urlName}
                  href={post.url}
                  location={post.location}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="scrollto"
        className={`${styles.showcaseContainer} container-fluid`}
      >
        {post.mockup ? (
          <div className="text-center pb-4 mb-4">
            <Image
              src={post.mockup}
              alt={post.title}
              width={1200}
              height={1200}
              style={{
                width: "100% !important",
                height: "100%",
                maxWidth: "780px",
                marginTop: "0px",
              }}
            />
          </div>
        ) : null}

        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>

        {post.video ? (
          <div
            style={{
              marginTop: 24,
            }}
          >
            <video width="100%" height="400" controls>
              <source src={post.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : null}
      </div>
      <Projects />
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "tools",
    "role",
    "mockup",
    "video",
    "cta",
    "url",
    "urlName",
    "cta2",
    "url2",
    "urlName2",
    "date",
    "year",
    "location",
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
      title: post.title,
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
