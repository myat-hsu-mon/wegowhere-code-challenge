import { View, Text, StyleSheet } from "react-native";

import { PaymentCardProps } from "../../interfaces/paymentCard";
import colors from "../../theme/color.json";

const PaymentCard: React.FC<PaymentCardProps> = ({
  cardNumber,
  name,
  expiryDate,
}) => {
  const lastFourNumber = cardNumber.slice(-4);
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardType}>VISA</Text>
      <Text style={styles.cardNumber}>**** **** **** {lastFourNumber}</Text>
      <View style={styles.container}>
        <Text style={styles.cardLabel}>Name On Card</Text>
        <Text style={styles.cardLabel}>Expires</Text>
      </View>
      <View style={styles.container}>
        <Text style={[styles.boldText]}>{name}</Text>
        <Text style={[styles.boldText]}>{expiryDate}</Text>
      </View>
    </View>
  );
};

const shadowCard = {
  //for IOS
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  //for Android
  elevation: 2,
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    rowGap: 12,
    backgroundColor: "#fff",
    paddingHorizontal: 28,
    paddingVertical: 32,
    padding: 28,
    marginBottom: 16,
    borderRadius: 16,
    ...shadowCard,
  },
  cardType: {
    fontSize: 28,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  cardNumber: {
    fontSize: 24,
    color: "gray",
  },
  cardLabel: {
    fontSize: 14,
    color: colors.light,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default PaymentCard;
