import React from 'react';

import reactPizza from '../img/ReactPizza.png';
import venomPage from '../img/venomPage.png';
import reactSneakers from '../img/ReactSneakers.png';

const Section_portfolio = () => {
  return (
    <>
      <section id="portfolio" className="section_portfolio">
        <h1>Портфолио</h1>
        <a href="https://github.com/aesthet1ccc" target="_blank">
          https://github.com/aesthet1ccc
        </a>
        <div className="works_portfolio_block">
          <img src={reactPizza} width={888} height={556} alt="React-Pizza Screen" />
          <p>React-Pizza</p>
        </div>
        <div className="works_portfolio_block">
          <img src={reactSneakers} width={888} height={556} alt="react- Sneakers screen" />
          <p>React-Sneakers</p>
        </div>
        <div className="works_portfolio_block">
          <img src={venomPage} width={888} height={556} alt="Venom-page screen" />
          <p>Venom page</p>
        </div>
      </section>
    </>
  );
};

export default Section_portfolio;
