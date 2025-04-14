import { api } from '@/shared/lib/api';

import { type Post, postSchema } from '../model/postValidator';

export const fetchPost = async (id: string): Promise<Post> => {
  const response = await api.get(`/posts/${id}`);
  return postSchema.parse(response.data);
};
