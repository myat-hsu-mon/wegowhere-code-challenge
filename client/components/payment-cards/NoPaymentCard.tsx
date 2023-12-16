import { Link } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import colors from "../../theme/color.json";

export default function NoPaymentCard() {
  return (
    <View style={styles.container}>
      <FontAwesome
        testID="credit-card-icon"
        name="credit-card-alt"
        size={48}
        color="#B2A59B"
      />
      <Text style={styles.message}>No Cards Found</Text>
      <Text style={styles.recommendation}>
        We recommend adding a card for easy payment
      </Text>
      <Link to="/NewPaymentCard">
        <Text style={styles.linkText}>Add New Card</Text>
      </Link>
    </View>
  );
}

const baseFontSize = 16;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 24,
    paddingHorizontal: 28,
  },
  message: {
    fontSize: baseFontSize,
  },
  recommendation: {
    fontSize: baseFontSize,
    textAlign: "center",
    paddingHorizontal: 32,
    lineHeight: 22,
  },
  linkText: {
    color: colors.primary,
    fontSize: baseFontSize,
  },
});
