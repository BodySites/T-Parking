// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// import envs from '@/config/environments';

// export const mockAPI = createApi({
//   reducerPath: 'mockAPI',
//   baseQuery: fetchBaseQuery({
//     baseUrl: envs.baseApiUrl,
//   }),
//   tagTypes: ['mock'],
//   endpoints: (builder) => ({
//     getMocks: builder.query<any[], string | undefined>({
//       query(token) {
//         return {
//           url: `/`,
//           headers: {
//             Authorization: `Bearer ${token || ' '}`,
//           },
//         };
//       },
//       providesTags: (result: any[] = []) => [
//         'mock',
//         ...result.map(({ id }) => ({
//           type: 'mock' as const,
//           id,
//         })),
//       ],
//     }),
//     getMock: builder.query<
//       any,
//       {
//         token: string | undefined;
//         id: string;
//       }
//     >({
//       query(arguments_) {
//         return {
//           url: `/${arguments_.id}`,
//           headers: {
//             Authorization: `Bearer ${arguments_.token || ' '}`,
//           },
//         };
//       },
//       providesTags: (_result, _error, argument) => [
//         { type: 'mock', id: argument.id },
//       ],
//     }),
//     addMock: builder.mutation<
//       void,
//       {
//         body: any;
//         token: string | undefined;
//       }
//     >({
//       query: (arguments_) => ({
//         url: '/',
//         method: 'POST',
//         body: arguments_.body,
//         headers: {
//           Authorization: `Bearer ${arguments_.token || ' '}`,
//         },
//       }),
//       invalidatesTags: ['mock'],
//     }),
//     editMock: builder.mutation<
//       void,
//       {
//         body: any;
//         id: string;
//         token: string | undefined;
//       }
//     >({
//       query: (arguments_) => ({
//         url: `/${arguments_.id}`,
//         method: 'PATCH',
//         body: arguments_.body,
//         headers: {
//           Authorization: `Bearer ${arguments_.token || ' '}`,
//         },
//       }),
//       invalidatesTags: (_result, _error, argument) => [
//         { type: 'mock', id: argument.id },
//       ],
//     }),
//     deleteMock: builder.mutation<
//       void,
//       {
//         id: string;
//         token: string | undefined;
//       }
//     >({
//       query: (arguments_) => ({
//         url: `/${arguments_.id}`,
//         method: 'DELETE',
//         headers: {
//           Authorization: `Bearer ${arguments_.token || ' '}`,
//         },
//       }),
//       invalidatesTags: ['mock'],
//     }),
//   }),
// });

// export const {
//   useAddMockMutation,
//   useDeleteMockMutation,
//   useEditMockMutation,
//   useGetMockQuery,
//   useGetMocksQuery,
// } = mockAPI;
