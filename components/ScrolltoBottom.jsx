import React, { useState } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const ScrollButton = () => {
  const [visible, setVisible] = useState(true);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 0) {
      setVisible(false);
    } else if (scrolled <= 0) {
      setVisible(true);
    }
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'auto',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Button>
      <FaArrowCircleDown onClick={scrollToBottom} style={{ display: visible ? 'inline' : 'none' }} />
    </Button>
  );
};

export default ScrollButton;
