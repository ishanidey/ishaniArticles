import React from 'react';

const Footer = () => (
  <>
    <h2 className="head-text font text-2xl font-bold text-center border-b w-full">Contact me</h2>

    <div className="app__footer-cards font">
      <div className="app__footer-card ">
        <img src="https://cdn-icons-png.flaticon.com/512/561/561188.png" alt="email" />
        <a href="mailto:20ec01038@iitbbs.ac.in" className="p-text">20ec01038@iitbbs.ac.in</a>
      </div>
      <div className="app__footer-card">
        <img src="https://i.pinimg.com/originals/59/26/3a/59263a1c263ade9bbaed2edd7caff2af.jpg" alt="phone" />
        <a href="tel:9253338824" className="p-text">9253338824</a>
      </div>
    </div>
  </>
);

export default Footer;
