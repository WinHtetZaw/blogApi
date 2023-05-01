import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  // const {data}
  const { title, id, image, desc } = blog;
  // console.log(title)
  return (
    <div className=" shadow-xl">
      <img src={image} className=" w-[250px]" alt="" />
      <h3 className=" font-semibold text-xl text-center">{title}</h3>
      <div className=" flex justify-around my-5">
        <Link to={`/detail/${id}`}>
          <button className=" bg-blue-400 py-1 px-3 text-gray-200 ">
            Detail
          </button>
        </Link>
        <button className=" bg-red-500 py-1 px-3 text-gray-200 ">Delete</button>
      </div>
    </div>
  );
};

export default BlogCard;
