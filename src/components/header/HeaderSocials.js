import React from 'react';
import { FiLinkedin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
        <FiLinkedin />
      </a>
      <a href='https://github.com' target='_blank' rel='noreferrer'>
        <FiGithub />
      </a>
      <a href='https://instagram.com' target='_blank' rel='noreferrer'>
        <FiInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
