import { rtkApi } from "app/api";

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const postsApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query<Posts[], void>({
      query: () => "posts",
      providesTags: ["Posts"],
    }),
    getUserPosts: builder.query<Posts[], number>({
      query: (userId) => `posts?userId=${userId}`,
      providesTags: ["Posts"],
    }),
  }),
});

export const { useGetAllPostsQuery, useGetUserPostsQuery } = postsApi;
