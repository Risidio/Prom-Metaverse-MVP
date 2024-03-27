import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../utilities/axiosQuery/axiosBaseQuery";
import { baseUrl } from "../../utilities/requests";
import {
  APIResponse,
  AuthResponse,
  ForgotPayload,
  LoginPayload,
  RegisterPayload,
  ResendEmailPayload,
  ResetPayload,
  User,
  VerifyEmailPayload,
} from "./interface";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/` }),
  endpoints: (builder) => ({
    login: builder.mutation<APIResponse<User>, LoginPayload>({
      query: (credentials) => ({ 
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation<AuthResponse, RegisterPayload>({
      query: (credentials) => ({
        url: "auth/signup",
        method: "POST",
        body: credentials,
      }),
    }),
    forgot: builder.mutation<APIResponse<null>, ForgotPayload>({
      query: (payload) => ({
        url: "auth/forgot_password",
        method: "POST",
        body: payload,
      }),
    }),
    sendVerificationEmail: builder.mutation<
      APIResponse<null>,
      ResendEmailPayload
    >({
      query: (payload) => ({
        url: "auth/resend_email",
        method: "POST",
        body: payload,
      }),
    }),
    verifyReset: builder.query<APIResponse<null>, string>({
      query: (token) => ({
        url: `auth/reset/verify/${token}`,
        method: "GET",
      }),
    }),
    reset: builder.mutation<APIResponse<null>, ResetPayload>({
      query: (credentials) => ({
        url: "auth/password/reset",
        method: "POST",
        body: credentials,
      }),
    }),
    verifyEmailAddress: builder.mutation<APIResponse<null>, VerifyEmailPayload>(
      {
        query: (payload) => ({
          url: `verification/email`,
          method: "POST",
          body: payload,
        }),
      }
    ),

    logOut: builder.mutation<APIResponse<null>, void>({
      query: (credentials) => ({
        url: "auth/token/destroy",
        method: "GET",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useForgotMutation,
  useResetMutation,
  useSendVerificationEmailMutation,
  useVerifyResetQuery,
  useVerifyEmailAddressMutation,
  useLogOutMutation,
} = authApi;
