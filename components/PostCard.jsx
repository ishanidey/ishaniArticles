import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => (
  <div className="p-0 lg:p-1 pb-4 mb-4 border-b">
    <div className="flex items-center mb-4">
      <img
        src={post.featuredImage.url}
        alt={post.title}
        className="rounded-lg h-24 w-24 mr-4"
      />
      <h2 className="transition duration-700 cursor-pointer font-semibold text-xl header-style">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h2>
    </div>
    <div className="flex justify-between mb-4">
      <p className="text-gray-700 font-medium text-lg">{post.author.name}</p>
      <span className="align-middle">
        Post edited at: {moment(post.createdAt).format('MMM DD, YYYY')}
      </span>
    </div>
    <h4>{post.excerpt}</h4>
    <div className="text-center mt-8">
      <Link href={`/post/${post.slug}`}>
        <span className="cursor-pointer button">Read More</span>
      </Link>
    </div>
  </div>
);

export default PostCard;
