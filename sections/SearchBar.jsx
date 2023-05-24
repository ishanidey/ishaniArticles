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
        <div className="border-b w-full py-2">
          <div className="grid grid-cols-2 gap-4">
            {posts.map((post, index) => (
              <div key={index}>
                <Link href={`/post/${post.slug}`}>
                  <span className="cursor-pointer ">
                    <span className="mr-2 font-bold">{index + 1}.</span>{post.title}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default SearchBar;
