import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import navbarStyles from "./Navbar.module.css";
import { motion } from "framer-motion";
import { useCursorContext } from "../../pages/_app";

const Navbar = () => {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      localStorage.getItem("theme") === "" ||
      localStorage.getItem("theme") === null
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const switchTheme = () => {
    if (
      document.documentElement.attributes["data-theme"].value === "dark" ||
      document.documentElement.attributes["data-theme"].value === ""
    ) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };
  return (
    <>
      <div className="relative">
        <header className={navbarStyles.header}>
          <nav className={`${navbarStyles.nav} container-fluid`}>
            <motion.div initial={{ x: 24 }}>
              <Logo />
            </motion.div>
          </nav>
          <svg
            tabIndex={0}
            aria-label="Switch theme"
            className={`${navbarStyles.sun} ${
              theme === "dark" ? navbarStyles.sunDark : ""
            }`}
            style={{
              outline: "none",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            focusable
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => {
              switchTheme();
            }}
          >
            <path
              className={navbarStyles.spin}
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <circle cx="12" cy="12" r="4" />
            <line
              className={theme === "light" ? navbarStyles.line : ""}
              x1="3"
              y1="3"
              x2="21"
              y2="21"
            />
            <path d="M16 12a4 4 0 0 0 -4 -4m-2.834 1.177a4 4 0 0 0 5.66 5.654" />
            <path
              className={navbarStyles.spin}
              d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
            />
          </svg>
        </header>
      </div>
    </>
  );
};

export default Navbar;
