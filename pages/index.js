import Head from "next/head";
import styles from "../styles/Home.module.css";
import Projects from "../components/Projects/Projects";
import YearDate from "../components/YearDate/YearDate";
import NavLeft from "../components/NavLeft/NavLeft";
import Name from "../components/Name/Name";
import NavRight from "../components/NavRight/NavRight";
import { useEffect, useState } from "react";
import Blogs from "../components/Blogs/Blogs";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>erindhoxha.dev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} container-fluid home`}>
        <Navbar />
        <div className={`container-fluid p-0 h-100`}>
          <NavLeft />
          <div className={styles.navAndNameContainer}>
            <NavRight />
            <Name />
          </div>
        </div>

        {/* <SocialBar /> */}
        <Projects />
        <Blogs />
      </main>
    </>
  );
}
