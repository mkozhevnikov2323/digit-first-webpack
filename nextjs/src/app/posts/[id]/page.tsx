'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import React from 'react';

import { fetchPost, Post, PostView } from '@/entities/Post';

export default function PostPage() {
  const params = useParams();
  const id = params?.id as string;

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

  return <PostView data={post} />;
}
