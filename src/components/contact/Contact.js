import React from 'react';
import './contact.css';
import { FiLinkedin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='container contact__container'>
        <h2 className='title'>Get In Touch</h2>
        <h5>
          Got a question or proposal, or just want to say hello? Go ahead.
        </h5>
        <article className='footer__socials'>
          <a
            href='https://linkedin.com'
            className='contact__icon'
            target='_blank'
            rel='noreferrer'
          >
            <FiLinkedin />
          </a>
          <a
            href='https://github.com'
            className='contact__icon'
            target='_blank'
            rel='noreferrer'
          >
            <FiGithub />
          </a>
          <a
            href='https://instagram.com'
            className='contact__icon'
            target='_blank'
            rel='noreferrer'
          >
            <FiInstagram />
          </a>
        </article>

        <div className='btn__mails'>
          <a href='#' className='btn'>
            <FiInstagram className='btn__icons' /> | Send Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
