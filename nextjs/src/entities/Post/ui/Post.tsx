'use client';
import React from 'react';

import { Post } from '../model/postValidator';

interface PostProps {
  data: Post;
}

export default function PostView({ data }: PostProps) {
  return (
    <div>
      <h2>Post #{data.id}</h2>
      <p>
        <strong>Title:</strong> {data.title}
      </p>
      <p>
        <strong>Body:</strong> {data.body}
      </p>
      <p>
        <strong>User ID:</strong> {data.userId}
      </p>
    </div>
  );
}
