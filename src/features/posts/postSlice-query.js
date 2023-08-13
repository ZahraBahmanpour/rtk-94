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
      providesTags: ["Post"],
    }),
    deletePost: builder.mutation({
      query: ({ id }) => ({
        url: `/posts/${id}`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useGetPostsQuery, useDeletePostMutation } = postsApiSlice;
