import React from 'react';

const Header = () => {
  return (
    <div>
      <header className="container_header">
        <a href="#main">
          <p className="header_main">Главная</p>
        </a>
        <a href="#about">
          <p>Обо мне</p>
        </a>
        <a href="#skills">
          <p>Навыки</p>
        </a>
        <a href="#portfolio">
          <p>Портфолио</p>
        </a>
        <a href="#contacts">
          <p>Контакты</p>
        </a>
      </header>
    </div>
  );
};

export default Header;
