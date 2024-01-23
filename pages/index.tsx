import Head from "next/head";
import styles from "../styles/Home.module.css";
import Projects from "../components/Projects/Projects";
import NavLeft from "../components/NavLeft/NavLeft";
import Name from "../components/Name/Name";
import NavRight from "../components/NavRight/NavRight";
import Blogs from "../components/Blogs/Blogs";
import Navbar from "../components/Navbar/Navbar";
import Contact from "../components/Contact/Contact";
import { useEffect } from "react";

export default function Home() {
  function adjustHeight() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    // Run the function when the page is loaded and when the window is resized
    window.addEventListener("load", adjustHeight);
    window.addEventListener("resize", adjustHeight);
  }, []);

  return (
    <>
      <Head>
        <title>Erind Hoxha | Frontend Engineer | UI/UX | Portfolio</title>
        <meta
          name="description"
          content="Frontend Engineer | UX/UI | Portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico?v=1" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta
          name="thumbnail"
          content="http://erindhoxha-portfolio.vercel.app/api/og"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#050505" />
        <meta name="theme-color" content="#050505" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#070707" />
        <meta
          property="og:title"
          content="Erind Hoxha | Frontend Engineer | UI/UX | Portfolio"
        />
        <meta property="og:site_name" content="erindhoxha.dev" />
        <meta property="og:url" content="https://erindhoxha.dev" />
        <meta
          property="og:description"
          content="Frontend Engineer | UX/UI | Portfolio"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="http://erindhoxha-portfolio.vercel.app/api/og"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://erindhoxha.dev" />
        <meta name="twitter:creator" content="@erindhoxha" />
        <meta name="twitter:title" content="Erind Hoxha Portfolio" />
        <meta
          name="twitter:description"
          content="Frontend Engineer | UX/UI | Portfolio"
        />
        <meta
          name="twitter:image"
          content="http://erindhoxha-portfolio.vercel.app/api/og"
        />
      </Head>
      <main className={`${styles.main}`}>
        <div className="home container-fluid">
          <Navbar />
          <div className={`container-fluid p-0`}>
            <NavLeft />
            <div className={styles.navAndNameContainer}>
              <NavRight />
              <Name />
            </div>
          </div>
        </div>

        {/* <SocialBar /> */}
        <Projects />
        <Blogs />
        <Contact />
      </main>
    </>
  );
}
