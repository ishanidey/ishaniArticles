import React, { useState, useEffect } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const ScrollToBottom = () => {
  const [showTopBtn, setShowTopBtn] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY < 0) {
        setShowTopBtn(false);
      } else {
        setShowTopBtn(true);
      }
    });
  }, []);
  const goToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  return (
    <div className="top-to-btm">
      {' '}
      {showTopBtn && (
      <FaAngleDown
        className="icon-position-bottom icon-style"
        onClick={goToBottom}
      />
      )}{' '}
    </div>
  );
};
export default ScrollToBottom;
