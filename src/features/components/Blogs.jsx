import React from "react";
import { useGetBlogsQuery } from "../services/blogApi";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

const Blogs = () => {
  const { data: blogs } = useGetBlogsQuery();
  console.log(blogs);
  return (
    <>
      <Link to={'/create'}>
        <button className=" bg-blue-400 py-1 px-3 text-gray-200 ml-5 mt-5">
          Crate New
        </button>
      </Link>
      <div className=" flex flex-wrap gap-7 justify-center mt-20">
        {blogs?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default Blogs;
