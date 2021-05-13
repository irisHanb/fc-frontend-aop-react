import axios from 'axios';

export const getPosts = async () => {
  const res = await axios.get('http://localhost:4000/posts');
  return res.data;
};

export const getPostById = async (id) => {
  const res = await axios.get(`http://localhost:4000/posts/${id}`);
  return res.data;
};
