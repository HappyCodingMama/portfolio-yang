import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <p>
          Learning is the only thing the mind never exhausts, never fears, and
          never regrets.
        </p>
      </div>
      <h5>- Leonardo da Vinci -</h5>

      <div className='footer__horizontalLine'></div>
      <div className='footer__menu'>
        <div>
          <ul className='permalinks'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#skills'>Skills</a>
            </li>
            <li>
              <a href='#portfolio'>Portfolio</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='footer__copyright'>
          <h5>© HCM Happy Coding Mama 2022</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
