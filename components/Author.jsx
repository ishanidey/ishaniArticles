import React from 'react';
import Image from 'next/image';
import moment from 'moment';

import { graphCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="text-center mt-10 mb-4 p-6 relative bg-opacity-20">
    <div className="absolute left-0 right-0 -top-7">
      <Image
        unoptimized
        loader={graphCMSImageLoader}
        alt={author.name}
        height="50px"
        width="50px"
        className="align-middle rounded-full"
        src={author.photo.url}
      />
    </div>
    <div className="author">
      <h3 className="header-style mt-2 mb-2 text-xl font-bold">Writer:✈️{author.name}</h3>
      <p className="text-black ">{author.bio}😊</p>
      <span className="align-middle">Joined: {moment(author.createdAt).format('MMM DD, YYYY')}</span>
      <p className="text-black text-ls">{author.location}</p>
    </div>
  </div>
);

export default Author;
