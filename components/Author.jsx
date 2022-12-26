import React from 'react';
import Image from 'next/image';
import moment from 'moment';

import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="text-center mt-20 mb-8 p-12 relative bg-opacity-20">
    <div className="absolute left-0 right-0 -top-14">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={author.name}
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src={author.photo.url}
      />
    </div>
    <div className="author">
      <h3 className="header-style mt-4 mb-4 text-2xl font-bold">Writer:✈️{author.name}</h3>
      <p className="text-black text-xl">{author.bio}😊</p>
      <span className="align-middle">Joined: {moment(author.createdAt).format('MMM DD, YYYY')}</span>
      <p className="text-black text-ls">{author.location}</p>
    </div>
  </div>
);

export default Author;
