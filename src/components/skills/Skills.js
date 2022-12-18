import React from 'react';
import './skills.css';
import { HiOutlinePencil } from 'react-icons/hi';
import { RiComputerLine } from 'react-icons/ri';
import { BsFilePlay } from 'react-icons/bs';

const data = [
  {
    id: 1,
    icon: <HiOutlinePencil />,
    title: 'UI/UX Design',
    description:
      'Dive deeper into an area of the UI/UX design process you’re especially interested in: competitive research, user research, usability testing, redesign recommendations',
  },
  {
    id: 2,
    icon: <RiComputerLine />,
    title: 'Web Development',
    description:
      ' guide can help you take the first steps toward a lucrative career in web development',
  },
  {
    id: 3,
    icon: <BsFilePlay />,
    title: 'Motion Graphics',
    description:
      'We are an experiential and content design studio based in Canada! Contact us today. We are masters of our craft, leveraging the transformative power of art & design. ',
  },
];

const Skills = () => {
  return (
    <section id='skills'>
      <div className='skills__container'>
        <h2 className='title'>What Skills I have.</h2>
        <div className='container skills__items'>
          {data.map(({ id, icon, title, description }) => {
            return (
              <div className='skills__card' key={id}>
                <div className='skills__icon'>{icon}</div>
                <h3 className='skills__title'>{title}</h3>
                <p className='skills__description'>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

// <table className='skills__table'>
// <tr>
//   <td colspan='2'>
//     <div className='skills__tableText'>
//       <h1>Frontend Development</h1>
//       <div className='skills__horizontalLine'></div>
//       <div>
//         <p>
//           Languages | JavaScript(ES6),Typecript,Python, HTML,
//           CSS/Sass
//         </p>
//         <p>Frameworks | ReactJS, AngularJS, VueJS, NodeJS</p>
//         <p>Libraries | jQuery, Redux</p>
//       </div>
//     </div>
//   </td>
// </tr>

// <tr>
//   <td>
//     <div className='skills__tableText'>
//       <h1 className='skills__text'>UI/UX Design</h1>
//       <div className='skills__horizontalLine'></div>
//       <div className='skills__content'>
//         <article>
//           <div>
//             <p>Figma</p>
//             <p className='skill__contentLevel'>
//               <FiBarChart2 className='btn__icons' />
//               Intermediate
//             </p>
//           </div>
//         </article>
//         <article>
//           <div>
//             <p>Adobe XD</p>
//             <p className='skill__contentLevel'>
//               <FiBarChart2 className='btn__icons' />
//               Intermediate
//             </p>
//           </div>
//         </article>
//         <article>
//           <div>
//             <p>Photoshop</p>
//             <p className='skill__contentLevel'>
//               <FiBarChart2 className='btn__icons' />
//               experienced
//             </p>
//           </div>
//         </article>
//         <article>
//           <div>
//             <p>Illustrator</p>
//             <p className='skill__contentLevel'>
//               <FiBarChart2 className='btn__icons' />
//               experienced
//             </p>
//           </div>
//         </article>
//       </div>
//     </div>
//   </td>
//   <td>
//     <div className='skills__tableText'>
//       <h1 className='skills__text'>Other Things I can do</h1>
//       <div className='skills__horizontalLine'></div>
//       <div className='skills__content'>
//         <article>
//           <div>
//             <p>After Effects</p>
//             <p className='skill__contentLevel'>
//               <FiBarChart2 className='btn__icons' /> experienced
//             </p>
//           </div>
//         </article>
//         <article>
//           <div>
//             <p>Premiere</p>
//             <p className='skill__contentLevel'>
//               <FiBarChart2 className='btn__icons' /> Intermediate
//             </p>
//           </div>
//         </article>
//         <article>
//           <div>
//             <p>Cinema 4D</p>
//             <p className='skill__contentLevel'>
//               <FiBarChart2 className='btn__icons' /> Intermediate
//             </p>
//           </div>
//         </article>
//       </div>
//     </div>
//   </td>
// </tr>
// </table>
