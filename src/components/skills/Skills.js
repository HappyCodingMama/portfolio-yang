import React from 'react';
import './skills.css';
import { FiBarChart2 } from 'react-icons/fi';

const Skills = () => {
  return (
    <section id='skills'>
      <div className='skills__container'>
        <h2 className='title'>What Skills I have.</h2>
        <div className='container skills__containerTable'>
          <table className='skills__table'>
            <tr>
              <td colspan='2'>
                <div className='skills__tableText'>
                  <h1>Frontend Development</h1>
                  <div className='skills__horizontalLine'></div>
                  <div>
                    <p>
                      Languages | JavaScript(ES6),Typecript,Python, HTML,
                      CSS/Sass
                    </p>
                    <p>Frameworks | ReactJS, AngularJS, VueJS, NodeJS</p>
                    <p>Libraries | jQuery, Redux</p>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className='skills__tableText'>
                  <h1 className='skills__text'>UI/UX Design</h1>
                  <div className='skills__horizontalLine'></div>
                  <div className='skills__content'>
                    <article>
                      <div>
                        <p>Figma</p>
                        <p className='skill__contentLevel'>
                          <FiBarChart2 className='btn__icons' />
                          Intermediate
                        </p>
                      </div>
                    </article>
                    <article>
                      <div>
                        <p>Adobe XD</p>
                        <p className='skill__contentLevel'>
                          <FiBarChart2 className='btn__icons' />
                          Intermediate
                        </p>
                      </div>
                    </article>
                    <article>
                      <div>
                        <p>Photoshop</p>
                        <p className='skill__contentLevel'>
                          <FiBarChart2 className='btn__icons' />
                          experienced
                        </p>
                      </div>
                    </article>
                    <article>
                      <div>
                        <p>Illustrator</p>
                        <p className='skill__contentLevel'>
                          <FiBarChart2 className='btn__icons' />
                          experienced
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </td>
              <td>
                <div className='skills__tableText'>
                  <h1 className='skills__text'>Other Things I can do</h1>
                  <div className='skills__horizontalLine'></div>
                  <div className='skills__content'>
                    <article>
                      <div>
                        <p>After Effects</p>
                        <p className='skill__contentLevel'>
                          <FiBarChart2 className='btn__icons' /> experienced
                        </p>
                      </div>
                    </article>
                    <article>
                      <div>
                        <p>Premiere</p>
                        <p className='skill__contentLevel'>
                          <FiBarChart2 className='btn__icons' /> Intermediate
                        </p>
                      </div>
                    </article>
                    <article>
                      <div>
                        <p>Cinema 4D</p>
                        <p className='skill__contentLevel'>
                          <FiBarChart2 className='btn__icons' /> Intermediate
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Skills;
