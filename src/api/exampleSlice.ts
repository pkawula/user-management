import { API_EXAMPLE } from "@/utils/constants/api-routes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const exampleSlice = createApi({
	reducerPath: "example",
	baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_API_ROUTE || "", method: "GET" }),
	endpoints: (builder) => ({
		getExample: builder.query({
			query: () => API_EXAMPLE
		})
	})
});

export const { useGetExampleQuery } = exampleSlice;
