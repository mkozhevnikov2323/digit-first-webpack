'use client';

import React, { useEffect, useState } from 'react';

import { RefetchButton } from '@/features/Comments';

import { fetchCommentsByPostId } from '../api/commentApi';
import type { Comment } from '../model/commentValidator';

export function CommentList({ postId }: { postId: number }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchCommentsByPostId(postId);
      setComments(data);
    } catch (err: any) {
      console.error(err);
      setError('Ошибка при загрузке комментариев');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Комментарии к посту {postId}</h2>
      <RefetchButton
        onClick={fetchData}
        loading={loading}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul style={{ marginTop: '1rem' }}>
        {comments.map((c) => (
          <li
            key={c.id}
            style={{ marginBottom: '1rem' }}
          >
            <strong>{c.name}</strong> ({c.email})<p>{c.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
