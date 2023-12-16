import { View, Text, TextInput, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";

import ErrorMessage from "../../components/common/ErrorMessage";
import Button from "../../components/common/Button";
import colors from "../../theme/color.json";
import useSignIn from "../../hooks/useSignIn";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../interfaces";
import { Link } from "@react-navigation/native";
import ErrorText from "../../components/common/ErrorText";

interface SignInFormData {
  email: string;
  password: string;
}

export interface SignInProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "SignIn">;
}

export default function SignIn({ navigation }: SignInProps) {
  const { control, handleSubmit, formState } = useForm<SignInFormData>();
  const { signIn, loading, error } = useSignIn({ navigation });

  const onSubmit = (data: SignInFormData) => {
    signIn(data);
  };

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: "auto" }}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <Controller
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="example@gmail.com"
                keyboardType="email-address"
                autoCapitalize="none"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            }}
            defaultValue=""
          />
          {formState.errors.email && (
            <ErrorMessage message={formState.errors.email.message as string} />
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <Controller
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="******"
                secureTextEntry
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
              />
            )}
            name="password"
            rules={{ required: "Password is required" }}
            defaultValue=""
          />
          {formState.errors.password && (
            <ErrorMessage
              message={formState.errors.password.message as string}
            />
          )}
        </View>

        <View style={styles.flexContainer}>
          <Text>Not have an account?</Text>
          <Link to="/SignUp" style={styles.linkText}>
            Sign Up Now
          </Link>
        </View>
      </View>
      {error && <ErrorText error={error} />}
      <Button
        title="Sign In"
        onPress={handleSubmit(onSubmit)}
        isLoading={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    borderColor: colors.secondary,
    borderRadius: 4,
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
  },
  inputContainer: {
    marginBottom: 15,
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  linkText: {
    color: colors.primary,
    fontSize: 16,
    textDecorationColor: colors.primary,
    textDecorationLine: "underline",
  },
});
