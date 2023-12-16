import { useState } from "react";

import request from "../config/request";
import { SignUpProps, UserProps } from "../interfaces/user";
import { setAuthorizationHeader } from "../helpers";
import { SignUpProps as SignUpScreenProps } from "../screens/auth/SignUp";

interface useSignUpResult {
  signUp: (signUpData: SignUpProps) => Promise<void>;
  user: UserProps | null;
  loading: boolean;
  error: string | null;
}

const useSignUp = ({ navigation }: SignUpScreenProps): useSignUpResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<UserProps | null>(null);

  const signUp = async (signUpData: SignUpProps) => {
    try {
      setLoading(true);
      const { data } = await request.post("/auth/sign-up", signUpData);
      setUser(data.data);
      setAuthorizationHeader(data.data.token);
      navigation.replace("PaymentCardsList");
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return { signUp, user, loading, error };
};

export default useSignUp;
