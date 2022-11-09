import React from 'react';
import './portfolio.css';
import { BsGithub } from 'react-icons/bs';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import PFIMG1 from '../../assets/portfolio1.jpg';
import PFIMG2 from '../../assets/portfolio2.jpg';
import PFIMG3 from '../../assets/portfolio3.jpg';
import PFIMG4 from '../../assets/portfolio4.jpg';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2 className='title'>My Recent Work.</h2>
      <div className='container portfolioTitle'>
        <h1>Web App</h1>
        <p>
          Making a UX portfolio easy for visitors to find their way around
          allows them to move from page to page without feeling frustrated.
        </p>
      </div>
      <div className='container container__cardTop'>
        <article className='portfolio__card'>
          <div className='portfolio__cardImg'>
            <img src={PFIMG1} alt='PFIMG' />
          </div>
          <div className='portfolio__cardContent'>
            <h2>MERN Stack with BLOG Project</h2>

            <div className='horizontalLine'></div>
            <p>
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track.
            </p>

            <div className='portfolio__itemCta__container'>
              <div>
                <small>JavaScript | MongoDB | Express | React | NodeJS </small>
              </div>

              <div className='portfolio__itemCta'>
                <a
                  href='https://github.com'
                  className='portfolioCta1'
                  target='_blank'
                >
                  <BsGithub />
                </a>{' '}
                <a href='https://github.com' target='_blank'>
                  <FaExternalLinkSquareAlt />
                </a>
              </div>
            </div>
          </div>
        </article>
        <article className='portfolio__card'>
          <div className='portfolio__cardImg'>
            <img src={PFIMG2} alt='PFIMG' />
          </div>
          <div className='portfolio__cardContent'>
            <h2>ECOMMERCIAL</h2>

            <div className='horizontalLine'></div>
            <p>
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track.
            </p>

            <div className='portfolio__itemCta__container'>
              <div>
                <small>JavaScript | MongoDB | Express | React | NodeJS </small>
              </div>

              <div className='portfolio__itemCta'>
                <a
                  href='https://github.com'
                  className='portfolioCta1'
                  target='_blank'
                >
                  <BsGithub />
                </a>{' '}
                <a href='https://github.com' target='_blank'>
                  <FaExternalLinkSquareAlt />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className='container portfolioTitle'>
        <h1>UI/UX</h1>
        <p>
          Making a UX portfolio easy for visitors to find their way around
          allows them to move from page to page without feeling frustrated.
        </p>
      </div>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={PFIMG3} alt='PFIMG' />
          </div>
          <h1>DASHBOARD</h1>
          <div className='horizontalLine'></div>
          <h3>
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track.
          </h3>

          <div className='portfolio__itemCta__container'>
            <div>
              <small>JavaScript React NodeJS Express</small>
            </div>

            <div className='portfolio__itemCta'>
              <a
                href='https://github.com'
                className='portfolioCta1'
                target='_blank'
              >
                <BsGithub />
              </a>{' '}
              <a href='https://github.com' target='_blank'>
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={PFIMG4} alt='PFIMG' />
          </div>
          <h1>TOUR WEBAPP</h1>
          <div className='horizontalLine'></div>
          <h3>
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track.
          </h3>

          <div className='portfolio__itemCta__container'>
            <div>
              <small>JavaScript React NodeJS Express</small>
            </div>

            <div className='portfolio__itemCta'>
              <a
                href='https://github.com'
                className='portfolioCta1'
                target='_blank'
              >
                <BsGithub />
              </a>{' '}
              <a href='https://github.com' target='_blank'>
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={PFIMG4} alt='PFIMG' />
          </div>
          <h1>PORTFOLIO</h1>
          <div className='horizontalLine'></div>
          <h3>
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track.
          </h3>

          <div className='portfolio__itemCta__container'>
            <div>
              <small>JavaScript React NodeJS MailJS</small>
            </div>

            <div className='portfolio__itemCta'>
              <a
                href='https://github.com'
                className='portfolioCta1'
                target='_blank'
              >
                <BsGithub />
              </a>{' '}
              <a href='https://github.com' target='_blank'>
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
