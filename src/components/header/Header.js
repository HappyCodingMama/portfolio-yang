import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import { MdOutlineEmail } from 'react-icons/md';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h2>Hello,</h2>
        <h1>I'm a Designer and Frontend Developer</h1>
        <h1>based in Vancouver, Canada.</h1>
        <h4>
          I like creating <span> beautiful things</span> with <span>code</span>.
        </h4>
        <h4>
          Everyday I try to <span>keep up with</span> the latest{' '}
          <span> technology </span> trends.
        </h4>
        <CTA />
        <HeaderSocials />

        <div className='scroll__down'>
          <a href='#contact'>
            <MdOutlineEmail />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
