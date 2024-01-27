import Link from "next/link";
import React from "react";
import { useCursorContext } from "../../pages/_app";
import styles from "./Logo.module.css";

const LogoComponent = () => {
  return (
    <>
      <div className={`${styles.logo}`}>Erind Hoxha</div>
      <p className={styles.p}>Front-end Engineer & UI/UX</p>
    </>
  );
};

const Logo = ({ isHomePage }) => {
  const { setCursorVariantFn, setCursorText } = useCursorContext();
  {
    return !isHomePage ? (
      <Link
        href={"/"}
        className="link no-underline"
        onMouseEnter={() => {
          setCursorVariantFn("text");
          setCursorText("← Home");
        }}
        onMouseLeave={() => {
          setCursorVariantFn("default");
          setCursorText("");
        }}
      >
        <LogoComponent />
      </Link>
    ) : (
      <Link href={"/"} className="link no-underline">
        <LogoComponent />
      </Link>
    );
  }
};

export default Logo;
