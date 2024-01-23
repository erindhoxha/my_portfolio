import Link from "next/link";
import React from "react";
import { useCursorContext } from "../../pages/_app";
import styles from "./Logo.module.css";

const Logo = () => {
  const { setCursorVariantFn, setCursorText } = useCursorContext();
  return (
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
      <div className={`${styles.logo}`}>Erind Hoxha</div>
      <p className={styles.p}>Front-end Engineer & UI/UX</p>
    </Link>
  );
};

export default Logo;
