import api from "./api";

export const getBlogs = async () => {
  try {
    const response = await api.get('/posts');
    console.log("ALLLLL", response.data);
    return response;
  } catch (error) {
    console.log("NO HAY DATA", error);
    throw new Error(error);
  }
}