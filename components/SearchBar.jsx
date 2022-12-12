import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getSB } from '../services';

const SearchBar = () => {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    getSB().then((newposts) => {
      setposts(newposts);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-black-400 py-2">
        <div className="hidden md:float-left md:contents">
          <h2>Articles</h2>
          {posts.map((post, index) => (
            <Link key={index} href={`/post/${post.slug}`}><span className="md:mt-2 align-middle text-black ml-4 font-semibold cursor-pointer">󠀠📜{post.title}󠀠󠀠</span></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
