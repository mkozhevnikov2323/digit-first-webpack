'use client';
import type { TableProps } from 'antd';
import { Table } from 'antd';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface DataType {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text, record) => <Link href={`/posts/${record.id}`}>{text}</Link>,
  },
  {
    title: 'Body',
    dataIndex: 'body',
    key: 'body',
  },
  {
    title: 'UserID',
    dataIndex: 'userId',
    key: 'userId',
  },
];

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const data: DataType[] = posts;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
        );
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err: any) {
        console.error('Error fetching posts:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts page</h2>

      {isLoading && <p>Loading posts...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!isLoading && !error && (
        <Table<DataType>
          columns={columns}
          dataSource={data}
          rowKey="id"
        />
      )}
    </div>
  );
}
