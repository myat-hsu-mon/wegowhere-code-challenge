import { useState } from "react";

import request from "../config/request";
import { SignUpProps, UserProps } from "../interfaces/user";
import { setAuthorizationHeader } from "../helpers";
import { SignInProps } from "../screens/auth/SignIn";

interface useSignInResult {
  signIn: (signInData: Omit<SignUpProps, "confirmPassword">) => Promise<void>;
  user: UserProps | null;
  loading: boolean;
  error: string | null;
}

const useSignIn = ({ navigation }: SignInProps): useSignInResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<UserProps | null>(null);

  const signIn = async (signInData: Omit<SignUpProps, "confirmPassword">) => {
    try {
      setLoading(true);
      const { data } = await request.post("/auth/sign-in", signInData);
      setUser(data.data);
      setAuthorizationHeader(data.data.token);
      navigation.replace("PaymentCardsList");
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return { signIn, user, loading, error };
};

export default useSignIn;
