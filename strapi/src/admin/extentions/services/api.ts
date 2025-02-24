import axios from 'axios';

type Comment = {
  name: string;
  id: string;
  documentId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type PostResponse = {
  data: {
    comments?: Comment[];
  };
};

export const fetchPostWithComments = async (documentId: string) => {
  try {
    const response = await axios.get<PostResponse>(`/api/posts/${documentId}?populate=*`);
    return response.data.data.comments || [];
  } catch (error) {
    console.error('Error fetching post:', error);
    return [];
  }
};