import React, { useState } from 'react';
import './nav.css';
import { FiHome } from 'react-icons/fi';
import { RiOpenArmLine } from 'react-icons/ri';
import { RiPagesLine } from 'react-icons/ri';
import { RiComputerLine } from 'react-icons/ri';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a
        href='#'
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <FiHome />
      </a>
      <a
        href='#about'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <RiOpenArmLine />
      </a>
      <a
        href='#skills'
        onClick={() => setActiveNav('#skills')}
        className={activeNav === '#skills' ? 'active' : ''}
      >
        <RiPagesLine />
      </a>
      <a
        href='#portfolio'
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <RiComputerLine />
      </a>
    </nav>
  );
};

export default Nav;
