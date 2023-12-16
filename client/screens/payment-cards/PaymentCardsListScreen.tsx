import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { PaymentCardProps } from "../../interfaces/paymentCard";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import Modal from "../../components/common/Modal";
import NoPaymentCard from "../../components/payment-cards/NoPaymentCard";
import PaymentCard from "../../components/payment-cards/PaymentCard";
import useCreateCharge from "../../hooks/useCreateCharge";
import usePaymentCards from "../../hooks/usePaymentCards";
import getRandomAmount from "../../helpers/getRandomAmount";
import ErrorText from "../../components/common/ErrorText";

const PaymentCardsListScreen: React.FC = () => {
  const { paymentCards, loading, error } = usePaymentCards();
  const {
    modalVisible,
    error: chargeError,
    loading: chargeLoading,
    createCharge,
    setModalVisible,
  } = useCreateCharge();

  const handlePayment = async (card: PaymentCardProps) => {
    const amount = getRandomAmount().toString();
    createCharge({ card, amount, currency: "thb" });
  };

  const renderPaymentCards = () => {
    if (paymentCards.length === 0) {
      return <NoPaymentCard />;
    }

    return (
      <ScrollView>
        {paymentCards.map((item) => (
          <TouchableOpacity
            activeOpacity={0.9}
            key={item._id}
            onPress={() => handlePayment(item)}
          >
            <PaymentCard
              cardNumber={item.cardNumber}
              name={item.name}
              expiryDate={item.expiryDate}
              cvv={item.cvv}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  if (loading || chargeLoading) return <LoadingSpinner />;
  if (error) return <ErrorText error={error} />;
  if (chargeError) return <ErrorText error={chargeError} />;
  if (modalVisible)
    return (
      <Modal
        title="Thank You!"
        description="Payment Done Successfully"
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    );

  return <View style={styles.container}>{renderPaymentCards()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default PaymentCardsListScreen;
