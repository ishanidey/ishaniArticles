import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// import { AppWrap } from '../../wrapper';
// import { images } from '../../constants';
// import './Poster.scss';

const Poster = () => (
  <div className="app__header app__flex poster">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="app__header-info"
    >
      <h1 className="heading"><Link href="https://ishanidey.netlify.app/">View my portfolio website</Link></h1>
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <div style={{ marginLeft: 20 }}>
            <p>Hi there, 👋 </p>
            <p>welcome to </p>
            <p className="text">ishaniDeyBlogs💡</p>
            <p> I write articles on web development.</p>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

export default Poster;
