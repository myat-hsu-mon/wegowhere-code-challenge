import { Text, StyleSheet } from "react-native";

export default function ErrorMessage({ message }: { message: string }) {
  return <Text style={styles.message}>{message}</Text>;
}
const styles = StyleSheet.create({
  message: {
    color: "red",
  },
});
