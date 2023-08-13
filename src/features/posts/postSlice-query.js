import apiSlice from "../apiSlice";

const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      transformResponse: (response) => {
        return response.map((post) => {
          return { ...post, date: new Date(post.date).toDateString() };
        });
      },
    }),
  }),
});

export const { useGetPostsQuery } = postsApiSlice;
