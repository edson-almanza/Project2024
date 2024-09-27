import api from "./api";

export const getBlogs = async () => {
  try {
    const response = await api.get('/posts');
    return response;
  } catch (error) {
    throw new Error(error);
  }
}