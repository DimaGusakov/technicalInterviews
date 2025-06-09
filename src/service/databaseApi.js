
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { getDatabase, ref, get, set, update, child } from 'firebase/database'

export const databaseApi = createApi({
  reducerPath: "firebaseApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getUser: builder.query({
      queryFn: async (uid) => {
        try {
          const dbRef = ref(getDatabase());
          const snapshot = await get(child(dbRef, `users/${uid}`));
          if (snapshot.exists()) {
            return { data: snapshot.val() };
          } else {
            return { error: { status: 404, message: "User not found" } };
          }
        } catch (err) {
          return { error: { status: 500, message: err.message } };
        }
      },
    }),

    addUser: builder.mutation({
      queryFn: async ({ uid, userData }) => {
        try {
          const db = getDatabase();
          await set(ref(db, `users/${uid}`), userData);
          console.log("User was added")
          return { data: userData };
        } catch (err) {
          return { error: { status: 500, message: err.message } };
        }
      },
    }),

    updateUser: builder.mutation({
      queryFn: async ({ uid, updates }) => {
        try {
          const db = getDatabase();
          await update(ref(db, `users/${uid}`), updates);
          return { data: updates };
        } catch (err) {
          return { error: { status: 500, message: err.message } };
        }
      },
    }),
    
  }),
})

export const { useLazyGetUserQuery, useAddUserMutation, useUpdateUserMutation } = databaseApi;