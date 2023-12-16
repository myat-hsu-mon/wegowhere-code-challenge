import { View, Text, StyleSheet } from "react-native";

export default function ErrorText({ error }: { error: string }) {
  return (
    <View>
      <Text style={styles.errorMessage}>{error}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  errorMessage: {
    textAlign: "center",
    padding: 12,
    color: "red",
  },
});
