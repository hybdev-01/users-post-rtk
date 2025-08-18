import { rtkApi } from "app/api";

export interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const commentsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getPostComments: build.query<Comments[], number>({
      query: (postId) => `comments?postId=${postId}`,
      providesTags: ["Comments"],
    }),
  }),
});

export const { useGetPostCommentsQuery } = commentsApi;
