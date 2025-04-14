'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

import { CommentList } from '@/entities/Comments';

export default function CommentsPage() {
  const params = useSearchParams();
  const postId = Number(params.get('postId') || 1);
  const router = useRouter();

  return (
    <main style={{ padding: '2rem' }}>
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
      <CommentList postId={postId} />
    </main>
  );
}
