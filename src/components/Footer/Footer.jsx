import React from 'react';
import s from './Footer.module.css';

const Footer = (props) => {
  return (
    <div className={s.footer}>
      <div>FRIENDS © 2023</div>
      <div>About</div>
      <div>Privacy Policy</div>
      <div>Terms</div>
      <div>Developers</div>
    </div>
  );
};

export default Footer;
