import { api } from '@/shared/lib/api';

import { Comment, commentListSchema } from '../model/commentValidator';

export const fetchCommentsByPostId = async (
  postId: number,
): Promise<Comment[]> => {
  const response = await api.get(`/posts/${postId}/comments`);
  const parsed = commentListSchema.safeParse(response.data);

  if (!parsed.success) {
    throw new Error('Invalid comment data');
  }

  return parsed.data;
};
