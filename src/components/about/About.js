import React, { useState } from 'react';
import './about.css';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';

const About = () => {
  const [clickedLeft, setClickedLeft] = useState(false);
  const [clickedRight, setClickedRight] = useState(false);

  const index = document.querySelector('.about__detailsLeft');

  const indexRight = document.querySelector('.about__detailsRight');

  const toggle = (index) => {
    if (clickedLeft === index) {
      return setClickedLeft(null);
    }
    setClickedLeft(index);
  };

  const toggleRight = (indexRight) => {
    if (clickedRight === indexRight) {
      return setClickedRight(null);
    }
    setClickedRight(indexRight);
  };

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
          <article className='about__dropdown'>
            <div
              className='about__detailsLeft'
              onClick={() => toggle(index)}
              key={index}
            >
              <h4>
                {clickedLeft === index ? (
                  <BiMinus className='btn__icons' />
                ) : (
                  <BiPlus className='btn__icons' />
                )}{' '}
                Education
              </h4>
            </div>
            {clickedLeft === index ? (
              <dir className='dropdown'>
                <p>2005 - 2009 | Bachelor of Multimedia</p>
                <p>2002 - 2004 | Associated Diploma of Computer Graphics</p>
              </dir>
            ) : null}
          </article>

          <article className='about__dropdown'>
            <div
              className='about__detailsRight'
              onClick={() => toggleRight(indexRight)}
              key={indexRight}
            >
              <h4>
                {clickedRight === indexRight ? (
                  <BiMinus className='btn__icons' />
                ) : (
                  <BiPlus className='btn__icons' />
                )}{' '}
                Where I’ve Worked
              </h4>
            </div>
            {clickedRight === indexRight ? (
              <dir className='dropdown'>
                <p>2005 - 2009 | CJ EnM</p>
                <p>2002 - 2004 | FOX network Korea</p>
                <p>2002 - 2004 | CJ Media chCGV FOXlife</p>
              </dir>
            ) : null}
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
