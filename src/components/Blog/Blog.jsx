import './Blog.css';
// import api from '../../services/api';
import{getBlogs} from '../../services/blog';
import { useEffect, useState } from 'react';

const Blog = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getAllBlog = async () => {
      try {
        const response = await getBlogs();
        if(response.data) {
          setList(response.data);
        }
      } catch (error) {
        throw new Error(error);
      };
    }
    getAllBlog();
  },[]);

  return (
    <>
    <div className="blog-row">
      <h1>TEST APIREST</h1>
      {list.map((obj, idx) => {
        return (
            <div className='table' key={idx}>
              <h3>{idx + 1} - TITLE: {obj.title}</h3>
              <p>MESSAGE: {obj.body}</p>
            </div>
            );
          })}
        </div>
      </>
    );
  }
  export default Blog;