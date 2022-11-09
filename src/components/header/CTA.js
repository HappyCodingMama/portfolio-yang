import React from 'react';
import CV from '../../assets/cv.pdf';
import { FiDownload } from 'react-icons/fi';
import { RiComputerLine } from 'react-icons/ri';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>
        <FiDownload className='btn__icons' /> | Resume
      </a>

      <a href='#portfolio' className='btn'>
        <RiComputerLine className='btn__icons' /> | Portfolio
      </a>
    </div>
  );
};

export default CTA;
