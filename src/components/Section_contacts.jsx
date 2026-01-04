import React from 'react';

import vkSvg from '../img/vk.svg';
import telegramSvg from '../img/telegram.svg';
import whatsappSvg from '../img/whatsapp.svg';
import mailSvg from '../img/mail.svg';

const Section_contacts = () => {
  return (
    <>
      <section id="contacts">
        <div className="contacts_block">
          <h1>Контакты</h1>
          <a href="https://t.me/Aesthet1c_0" target="_blank">
            <button>Связаться со мной</button>
          </a>

          <div className="link_contacts_block">
            <a href="https://vk.com/aaaesthet1c" target="_blank">
              <div className="contact_info">
                <img src={vkSvg} alt="" />
                <p>VK</p>
              </div>
            </a>

            <a href="https://t.me/Aesthet1c_0" target="_blank">
              <div className="contact_info">
                <img src={telegramSvg} alt="" />
                <p>Telegram</p>
              </div>
            </a>

            <div className="contact_info">
              <img src={whatsappSvg} alt="" />
              <p>WhatsApp</p>
            </div>
            <div className="contact_info">
              <img src={mailSvg} alt="" />
              <p>Mail.ru</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section_contacts;
