  
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInput, setBlogData } from "../Features/userSlice";


const Blogs = () => {
  const searchInput = useSelector(selectUserInput);
  const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=d759bd2c45d50fc894f4028e224b731c`;
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(blog_url)
      .then((response) => {
        dispatch(setBlogData(response.data));
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchInput]);

  return (
    <div className="blog__page">
      <h1 className="blog__page__header" style={{textAlign:'center', color:'#fff'}}>“If you don’t like to read, you haven’t found the right book.”</h1>
      <h4 style={{textAlign:'right', fontSize:'25px'}}>– J.K. Rowling</h4>
      {loading ? <h1 className="loading">Loading...</h1> : ""}
      <div className="blogs">
        {blogs?.articles?.map((blog) => (
          <a className="blog" target="_blank" href={blog.url}>
            <img src={blog.image} />
            <div>
              <h3 className="sourceName">
                <span style={{}}>{blog.source.name}</span>
                <p>{blog.publishedAt}</p>
              </h3>
              <h1 style={{textDecoration:'none'}}>{blog.title}</h1>
              <p>{blog.description}</p>
              <button class="button button3">Read More</button>
            </div>
          </a>
        ))}

        {blogs?.totalArticles == 0 && (
          <h1 className="no__blogs">
           Search something else to read blogs..
          </h1>
        )}
      </div>
    </div>
  );
};

export default Blogs;