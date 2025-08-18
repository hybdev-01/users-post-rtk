import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "./store";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const rtkApi = createApi({
  reducerPath: "rtkApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState)["@@auth-slice"].token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
    },
  }),
  tagTypes: ["Posts", "Users", "Comments"],
  endpoints: () => ({}),
});
