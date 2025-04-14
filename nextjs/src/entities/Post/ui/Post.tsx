'use client';
import Link from 'next/link';
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
      <Link href={`/posts/${data.id}/comments?postId=${data.id}`}>
        <button
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#444',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
          }}
        >
          Смотреть комментарии
        </button>
      </Link>
    </div>
  );
}
