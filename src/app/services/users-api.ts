import { rtkApi } from "app/api";

export interface User {
  id: number;
  name: string;
  username: string;
}

const usersApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<User | undefined, string>({
      query: (userName) => `users?username=${userName}`,
      transformResponse: (response: User[], _, arg) => {
        const [currentUser] = response.filter((user) => user.username === arg);
        if (currentUser && Object.keys(currentUser).length > 0)
          return {
            id: currentUser.id,
            name: currentUser.name,
            username: currentUser.username,
          };

        return;
      },
      providesTags: ["Users"],
    }),
  }),
});

export const { useLazyGetUserQuery } = usersApi;
