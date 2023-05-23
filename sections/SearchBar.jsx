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
    <>
      <p className="text-4xl container mx-auto px-10 mb-8 mt-8 searchBar-style font-bold">Articles</p>
      <div className="container mx-auto px-10 mb-8">
        <div className="border-b w-full inline-block border-black-400 py-2">
          <div className="hidden md:float-left md:contents">
            <p className="container mx-auto mb-8 mt-8 text-4xl font-bold text-center header-style">Find the post here</p>
            {posts.map((post, index) => (
              <Link key={index} href={`/post/${post.slug}`}><span className="md:mt-2 align-middle ml-4 font-semibold cursor-pointer navbar-style">󠀠📜{post.title}󠀠󠀠</span></Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
