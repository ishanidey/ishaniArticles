import React from 'react';
import Link from 'next/link';

// import { AppWrap } from '../../wrapper';
// import { images } from '../../constants';
// import './Poster.scss';

const Poster = () => (
  <div className="app__header app__flex bg-gray-400">
    <h1 className="heading"><Link href="https://ishanidey.netlify.app/">View my portfolio website</Link></h1>
    <div className="app__header-badge">
      <div className="badge-cmp app__flex">
        <div style={{ marginLeft: 20 }}>
          <p>Hi there, 👋 </p>
          <p className="text">Ishani Dey blog</p>
          <p> I write articles on web development.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Poster;
