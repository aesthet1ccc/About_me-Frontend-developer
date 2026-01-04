import React from 'react';
import reduxSvg from '../img/redux.svg';
import reactSvg from '../img/react.svg';
import htmlSvg from '../img/html.svg';
import tsSvg from '../img/typescript.svg';
import cssSvg from '../img/css.svg';
import gitSvg from '../img/git.svg';
import figmaSvg from '../img/figma.svg';
import viteSvg from '../img/vite.svg';

const Section_skills = () => {
  return (
    <>
      <section id="skills" className="section_skills">
        <h1>Навыки</h1>
        <p>Технологии, с которыми я работаю</p>
        <div className="skills_block">
          <div className="card_skill">
            <img width={140} height={140} src={tsSvg} alt="svg TypeScript" />
            <h6>TypeScript</h6>
          </div>
          <div className="card_skill">
            <img width={140} height={140} src={reactSvg} alt="svg React" />
            <h6>React</h6>
          </div>
          <div className="card_skill">
            <img width={140} height={140} src={htmlSvg} alt="svg HTML" />
            <h6>HTML</h6>
          </div>
          <div className="card_skill">
            <img width={140} height={140} src={cssSvg} alt="css Svg" />
            <h6>CSS</h6>
          </div>
          <div className="card_skill">
            <img width={140} height={140} src={reduxSvg} alt="Redux svg" />
            <h6>Redux toolkit</h6>
          </div>
          <div className="card_skill">
            <img width={140} height={140} src={gitSvg} alt="Git svg" />
            <h6>Git</h6>
          </div>
          <div className="card_skill">
            <img width={140} height={140} src={viteSvg} alt="Vite svg" />
            <h6>Vite</h6>
          </div>
          <div className="card_skill">
            <img width={140} height={140} src={figmaSvg} alt="Figma svg" />
            <h6>Figma</h6>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section_skills;
