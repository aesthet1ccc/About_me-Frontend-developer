import React from 'react';
import photo_frontend_developer from '../img/frontend_developer.png';

const Section_main = () => {
  return (
    <div>
      <section id="main" className="section_main">
        <div>
          <h1>Alexander Lobanov</h1>
          <h3>Frontend-developer</h3>
          <h3>19 лет, Екатеринбург</h3>
        </div>
        <img src={photo_frontend_developer} />
      </section>
    </div>
  );
};

export default Section_main;
