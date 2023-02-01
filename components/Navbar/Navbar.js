import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import NavItem from '../NavItem/NavItem';
import navbarStyles from './Navbar.module.css';
import { motion } from 'framer-motion';

const MENU_LIST = [
  { text: 'Home', href: '/' },
  { text: 'About Us', href: '/about' },
  { text: 'Contact', href: '/contact' },
];
const Navbar = () => {
  return (
    <header>
      <nav className={navbarStyles.nav}>
        <motion.div animate={{ x: 12 }}>
          <Logo />
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar;
