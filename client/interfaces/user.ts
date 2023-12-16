export interface SignUpProps {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserProps {
  token: string;
  user: {
    _id: string;
  };
}
