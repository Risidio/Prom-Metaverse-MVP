export interface APIResponse<T> {
  status: boolean;
  status_code: number;
  response: string;
  data: T;
}

export interface User {
  token: string;
  account_type: string;
  auth_id: string;
  created_at: string;
  email: string;
  last_seen: string | null;
  meta_data: string | null;
  status: boolean;
  updated_at: string;
  username: string;
  uuid: string;
  auth: string;
  account: string | null;
  is_email_verified: boolean;
  deleted_at: string | null;
  profile_photo: string | null;
  first_name: string;
  last_name: string;
  full_name: string;
  is_suspended: boolean;
  date_of_birth: Date;
  expires_in: number;
  is_agent: boolean | null;
  phone: string | null;
  gender: string | null;
}

// export interface UserWithAuth extends User {
//   authorization: {
//     type: string;
//     access_token?: string | null;
//     expires_in: number;
//   };
// }

export interface Auth {
  user?: User | null;
  token_type: string;
  access_token?: string | null;
  isLoading?: boolean;
  expires_in: number;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  data: User;
}

export interface CheckpointEmailResponse {
  data: {
    email: string;
    is_email_free: boolean;
  };
}

export interface CheckpointUsernameResponse {
  data: {
    username: string;
    is_username_free: boolean;
  };
}
export interface ForgotPayload {
  email: string;
}

export interface ResetPayload {
  token: string;
  password: string;
  confirm_password: string;
}
export interface RegisterPayload {
  email: string;
  password: string;
}

export interface VerifyEmailPayload {
  code: string;
  // email: string;
}

export interface ResendEmailPayload {
  end: string;
  email: string;
}

export interface CheckpointQueryPayload {
  query: string;
}
