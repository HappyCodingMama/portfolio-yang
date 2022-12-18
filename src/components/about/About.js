import React, { useState } from 'react';
import './about.css';

const About = () => {
  return (
    <section id='about'>
      <h2 className='title'>About .</h2>
      <div className='container about__container'>
        <div className='about__content'>
          <p>
            Hello! I’m a <span>designer</span> and self-taught{' '}
            <span>Front End Developer</span> based in Vancouver, Canada. I’m
            passionate about developing both the technical and visual aspects of
            digital products. I have acquired <span>programming knowledge</span>{' '}
            from taking online courses on Udemy, w3schools and FreeCodeCamp. In
            a past life, I was graphic designer at{' '}
            <span>broadcasting company</span>.You can find cool things on my
            website. I often write about my findings on my blog. I am currently
            looking for new opportunities.
          </p>
        </div>

        <div className='about_containerDetail'>
          <div className='education'>
            <h3 className='about__title'>Education</h3>

            <div className='timeline'>
              <div className='timeline__item'>
                <div className='circle__dot'></div>
                <span className='timeline__title'>
                  Bachelor of Computer Science
                </span>
                <p className='timeline__date'>2005 - 2009</p>
              </div>
              <div className='timeline__item'>
                <div className='circle__dot'></div>
                <span className='timeline__title'>Bachelor of Multimedia</span>
                <p className='timeline__date'>2005 - 2009</p>
              </div>

              <div className='timeline__item'>
                <div className='circle__dot'></div>
                <span className='timeline__title'>
                  Associate of Computer Graphics
                </span>

                <p className='timeline__date'>2002 - 2004</p>
              </div>
            </div>
          </div>

          <div className='experience'>
            <h3 className='about__title'>Experience</h3>

            <div className='timeline'>
              <div className='timeline__item'>
                <div className='circle__dot'></div>
                <span className='timeline__title'>
                  Apple | Assistant Manager
                </span>

                <p className='timeline__date'>2010 - 2020</p>
              </div>

              <div className='timeline__item'>
                <div className='circle__dot'></div>
                <span className='timeline__title'>
                  Microsoft | Full Stack Developer
                </span>

                <p className='timeline__date'>2006 - 2009</p>
              </div>

              <div className='timeline__item'>
                <div className='circle__dot'></div>
                <span className='timeline__title'>Google | Intership</span>

                <p className='timeline__date'>2005 - 2006</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
