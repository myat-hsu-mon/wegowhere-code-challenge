import { View, Text, TextInput, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";

import ErrorMessage from "../../components/common/ErrorMessage";
import Button from "../../components/common/Button";
import colors from "../../theme/color.json";
import useSignUp from "../../hooks/useSignUp";
import { setAuthorizationHeader } from "../../helpers";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../interfaces";
import { Link } from "@react-navigation/native";
import ErrorText from "../../components/common/ErrorText";

interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignUpProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "SignIn">;
}

export default function SignUp({ navigation }: SignUpProps) {
  const { control, handleSubmit, formState } = useForm<SignUpFormData>();
  const { signUp, user, loading, error } = useSignUp({ navigation });

  const onSubmit = (data: SignUpFormData) => {
    signUp(data);
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
            rules={{ required: "Email is required", pattern: /^\S+@\S+$/i }}
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
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }}
            defaultValue=""
          />
          {formState.errors.password && (
            <ErrorMessage
              message={formState.errors.password.message as string}
            />
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
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
            name="confirmPassword"
            rules={{
              required: "Confirm Password is required",
              validate: (value) =>
                value === control._formValues.password ||
                "Passwords do not match",
            }}
            defaultValue=""
          />
          {formState.errors.confirmPassword && (
            <ErrorMessage
              message={formState.errors.confirmPassword.message as string}
            />
          )}
        </View>

        <View style={styles.flexContainer}>
          <Text>Already have an account?</Text>
          <Link to="/SignIn" style={styles.linkText}>
            Sign In
          </Link>
        </View>
      </View>

      {error && <ErrorText error={error} />}
      <Button title="Sign Up" onPress={handleSubmit(onSubmit)} />
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
