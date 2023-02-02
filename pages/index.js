import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useCursorContext } from './_app';
import SocialBar from '../components/SocialBar/SocialBar';
import Projects from '../components/Projects/Projects';
import YearDate from '../components/YearDate/YearDate';
import NavLeft from '../components/NavLeft/NavLeft';
import Name from '../components/Name/Name';
import NavRight from '../components/NavRight/NavRight';

export default function Home() {
  return (
    <>
      <Head>
        <title>erindhoxha.dev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} container-fluid`}>
        <NavLeft />
        <Name />
        <YearDate />
        {/* <SocialBar /> */}
        {/* <Projects /> */}
      </main>
    </>
  );
}
