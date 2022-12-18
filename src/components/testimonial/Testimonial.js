import React, { useState, useEffect } from 'react';
import './testimonial.css';
import data from './data';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const Testimonial = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section id='testimonial'>
      <div className='testimonial__container container'>
        <h2 className='title'>Testimonial.</h2>

        <div className='section-center'>
          {people.map((item, indexPeople) => {
            const { id, image, name, title, quote } = item;
            let position = 'nextSlide';
            if (indexPeople === index) {
              position = 'activeSlide';
            }
            if (
              indexPeople === index - 1 ||
              (index === 0 && indexPeople === people.length - 1)
            ) {
              position = 'lastSlide';
            }
            return (
              <article className={position} key={id}>
                <div className='people-items'>
                  <div className='people-image'>
                    <img src={image} alt={name} className='person-img' />
                  </div>

                  <div className='people-quote'>
                    <p className='quote_text'>{quote}</p>
                    <p className='quote_title'>{title}</p>
                    <p className='quote_name'>{name}</p>
                  </div>
                </div>
              </article>
            );
          })}
          <button className='prev' onClick={() => setIndex(index - 1)}>
            <AiOutlineArrowLeft />
          </button>
          <button className='next' onClick={() => setIndex(index + 1)}>
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
