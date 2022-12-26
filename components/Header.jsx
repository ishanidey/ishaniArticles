import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8 header-style">
      <div className="border-b w-full inline-block border-black-400 py-2">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl">ishaniDeyBlogs💡</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents  navbar-style">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:mt-2 align-middle ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
          <Link href="https://ishanidey.netlify.app/"><span className="md:mt-2 align-middle text-black ml-4 font-semibold cursor-pointer">My✨portfolio✨</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
