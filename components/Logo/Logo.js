import Link from "next/link";
import React from "react";
import { useCursorContext } from "../../pages/_app";
import styles from "./Logo.module.css";

const Logo = () => {
  const { setCursorVariantFn, setCursorText } = useCursorContext();
  return (
    <Link
      href={"/"}
      className="link"
      onMouseEnter={() => {
        setCursorVariantFn("text");
        setCursorText("← Home");
      }}
      onMouseLeave={() => {
        setCursorVariantFn("default");
        setCursorText("");
      }}
    >
      <div className={`${styles.logo}`}>erindhoxha.dev_</div>
      <p className={styles.p}>front-end, ui/ux</p>
    </Link>
  );
};

export default Logo;
