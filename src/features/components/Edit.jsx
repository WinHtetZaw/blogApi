import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEditBlogMutation } from "../services/blogApi";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [image, setUrl] = useState("");
  const [desc, setDesc] = useState("");

  const {id } = useParams()

  const [editBlog] = useEditBlogMutation();

  const nav = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();
    const newUser = {
      title,
      id,
      image,
      desc,
    };
    console.log(newUser);
    editBlog(newUser);
    nav("/");
  };
  return (
    <div className=" flex justify-center items-center h-screen">
      <form onSubmit={formHandler} className=" flex flex-col w-72 gap-10">
        <div className=" flex flex-col gap-5 border px-5 py-3">
          <label htmlFor="title" className=" px-2">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=" bg-gray-100 px-2 py-1 outline-none"
            type="text"
            placeholder="Title..."
          />
        </div>
        <div className=" flex flex-col gap-5 border px-5 py-3">
          <label htmlFor="link" className="px-2">
            Link
          </label>
          <input
            value={image}
            onChange={(e) => setUrl(e.target.value)}
            className=" bg-gray-100 px-2 py-1 outline-none"
            type="text"
            placeholder="Link..."
          />
        </div>
        <div className=" flex flex-col gap-5 border px-5 py-3">
          <label htmlFor="desc" className="px-2">
            Desc
          </label>
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className=" bg-gray-100 px-2 py-1 outline-none"
            type="text"
            placeholder="desc..."
          />
        </div>
        <button type="submit" className=" bg-blue-500 px-3 py-1 text-gray-300">
          Save
        </button>
      </form>
    </div>
  );
};

export default Edit;
