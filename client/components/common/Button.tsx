import { Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../../theme/color.json";
import LoadingSpinner from "./LoadingSpinner";

interface ButtonProps {
  title: string;
  backgroundColor?: string;
  color?: string;
  isLoading?: boolean;
  onPress: () => void;
}
export default function Button({
  title,
  backgroundColor = colors.primary,
  color = "#fff",
  isLoading = false,
  onPress,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles({ backgroundColor }).button}
      onPress={onPress}
      disabled={isLoading}
      testID="button"
    >
      {isLoading ? (
        <LoadingSpinner size={20} />
      ) : (
        <Text style={styles({ color }).text} testID="text">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = ({
  backgroundColor,
  color,
}: {
  backgroundColor?: string;
  color?: string;
}) =>
  StyleSheet.create({
    button: {
      backgroundColor,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 8,
      borderRadius: 50,
      elevation: 2,
      height: 48,
    },
    text: {
      color,
      fontSize: 16,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
    },
  });
