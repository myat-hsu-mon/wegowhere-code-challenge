import { View, StyleSheet } from "react-native";
import { UIActivityIndicator } from "react-native-indicators";

import colors from "../../theme/color.json";

const LoadingSpinner = ({
  size = 40,
  color = colors.secondary,
}: {
  size?: number;
  color?: string;
}) => {
  return (
    <View style={styles.container} testID="loading-spinner">
      <UIActivityIndicator color={color} size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingSpinner;
