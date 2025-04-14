'use client';
import React from 'react';

type Props = {
  onClick: () => void;
  loading: boolean;
};

export function RefetchButton({ onClick, loading }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      style={{
        padding: '0.5rem 1rem',
        backgroundColor: '#0070f3',
        color: '#fff',
        borderRadius: 4,
        border: 'none',
        cursor: 'pointer',
        marginTop: '1rem',
      }}
    >
      {loading ? 'Обновление...' : 'Обновить комментарии'}
    </button>
  );
}
