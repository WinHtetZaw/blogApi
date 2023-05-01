import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleBlogQuery } from "../services/blogApi";

const Detail = () => {
  const { id } = useParams();
  console.log(id);

  const { data } = useGetSingleBlogQuery(id);
  console.log(data);

  return (
    <div className=" flex flex-col justify-center items-center h-screen">
      <img src={data?.image} className=" w-[150px] md:w-[500px]" alt="" />
      <h3>{data?.title}</h3>
      <p>{data?.desc}</p>
      <Link to={`/edit/${id}`}>
        <button className=" bg-blue-400 py-1 px-3 text-gray-200  mt-3">
          Edit
        </button>
      </Link>
    </div>
  );
};

export default Detail;
