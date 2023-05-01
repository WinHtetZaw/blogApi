import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["blog"],
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blogs",
      providesTags: ["blog"],
    }),
    getSingleBlog: builder.query({
      query: (id) => `/blogs/${id}`,
      providesTags: ["blog"],
    }),
    create: builder.mutation({
      query: (newData) => ({
        url: "/blogs",
        method: "POST",
        body: newData,
      }),
      invalidatesTags: ["blog"],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["blog"],
    }),
    editBlog: builder.mutation({
      query: (data) => ({
        url: `/blogs/${data?.id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["blog"],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useCreateMutation,
  useGetSingleBlogQuery,
  useDeleteBlogMutation,
  useEditBlogMutation,
} = blogApi;
