'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';

import { fetchPost, Post, PostView } from '@/entities/Post';

export default function PostPage() {
  const params = useParams();
  const id = params?.id as string;
  const router = useRouter();

  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useQuery<Post>({
    queryKey: ['post', id],
    queryFn: () => fetchPost(id),
    enabled: !!id,
  });

  if (isLoading) return <p>Loading post...</p>;
  if (isError)
    return <p style={{ color: 'red' }}>Error: {(error as Error).message}</p>;
  if (!post) return <p>No post found.</p>;

  return (
    <div>
      <button
        onClick={() => router.back()}
        style={{
          marginBottom: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#ccc',
          color: '#000',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        ← Назад
      </button>
      <PostView data={post} />
    </div>
  );
}
