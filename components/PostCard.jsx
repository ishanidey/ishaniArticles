import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';

const PostCard = ({ post }) => (
  <div className=" p-0 lg:p-1 pb-4 mb-4 border-b">
    <div className="relative overflow-hidden pb-40 mb-4 border-b">
      <img src={post.featuredImage.url} alt="" className="object-top absolute h-60 w-half object-cover  shadow-lg rounded-t-lg " />
    </div>

    <h2 className="transition duration-700 mb-4 cursor-pointer font-semibold border-b text-black">
      <Link href={`/post/${post.slug}`}>{post.title}</Link>
    </h2>
    <div className="block lg:flex mb-8 w-half">
      <div className="flex mb-4 lg:mb-0 w-half lg:w-auto mr-8 border-b">
        <Image
          unoptimized
          loader={grpahCMSImageLoader}
          alt={post.author.name}
          height="30px"
          width="30px"
          className="align-middle rounded-full"
          src={post.author.photo.url}
        />
        <p className="inline text-gray-700 ml-2 font-medium text-lg border-b">{post.author.name}</p>
      </div>
      <div className="font-medium text-gray-700 border-b">
        <span className="align-middle">Post updated at:📅{moment(post.createdAt).format('MMM DD, YYYY')}</span>
      </div>
    </div>
    <h4 className="text-s px-2 lg:px-10 mb-8 border-b">
      {post.excerpt}
    </h4>
    <div className="text-center">
      <Link href={`/post/${post.slug}`}>
        <span className="cursor-pointer">Continue🧐</span>
      </Link>
    </div>
  </div>
);

export default PostCard;
