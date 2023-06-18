import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Projects from '../components/Projects/Projects';
import YearDate from '../components/YearDate/YearDate';
import NavLeft from '../components/NavLeft/NavLeft';
import Name from '../components/Name/Name';
import NavRight from '../components/NavRight/NavRight';
import { useEffect, useState } from 'react';
import Blogs from '../components/Blogs/Blogs';
import Navbar from '../components/Navbar/Navbar';
import Contact from '../components/Contact/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>erindhoxha.dev</title>
        <meta name="description" content="Erind Hoxha | Frontend | UI/UX" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#070707" />
        <meta name="msapplication-TileColor" content="#070707" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content="erindhoxha.dev" />
        <meta property="og:site_name" content="erindhoxha.dev" />
        <meta property="og:url" content="https://erindhoxha.dev" />
        <meta
          property="og:description"
          content="Erind Hoxha | Frontend | UI/UX"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="http://erindhoxha-portfolio.vercel.app/api/og"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://erindhoxha.dev" />
        <meta name="twitter:creator" content="@erindhoxha" />
        <meta name="twitter:title" content="Erind Hoxha | Frontend | UI/UX" />
        <meta name="twitter:description" content="Portfolio" />
        <meta
          name="twitter:image"
          content="http://erindhoxha-portfolio.vercel.app/api/og"
        />
      </Head>
      <main className={`${styles.main}`}>
        <div className="home container-fluid">
          <Navbar />
          <div className={`container-fluid p-0 h-100`}>
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
