import { View, Text, TextInput, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";

import ErrorMessage from "../../components/common/ErrorMessage";
import Button from "../../components/common/Button";
import { PaymentCardProps } from "../../interfaces/paymentCard";
import useCreatePaymentCard from "../../hooks/useCreatePaymentCart";
import colors from "../../theme/color.json";
import ErrorText from "../../components/common/ErrorText";

interface NewPaymentCardScreenProps {
  navigation: any;
}

export default function NewPaymentCardScreen({
  navigation,
}: NewPaymentCardScreenProps) {
  const { control, handleSubmit, formState } = useForm<PaymentCardProps>();

  const { createPaymentCard, loading, error } = useCreatePaymentCard();

  const onSubmit = async (data: PaymentCardProps) => {
    await createPaymentCard(data);
    if (!error) {
      navigation.replace("PaymentCardsList");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>ATM/Debit/Credit card number</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <TextInput
                style={styles.input}
                placeholder="0000 0000 0000 0000"
                keyboardType="numeric"
                onChangeText={onChange}
                value={value}
              />
            )}
            name="cardNumber"
            rules={{
              required: "Card Number is required",
              minLength: {
                value: 12,
                message: "Card Number should be at least 12 characters long",
              },
              maxLength: {
                value: 16,
                message: "Card Number should not exceed 16 characters",
              },
              pattern: {
                value: /^\d+$/,
                message: "Card Number should only contain digits",
              },
            }}
          />
          {formState.errors.cardNumber && (
            <ErrorMessage
              message={formState.errors.cardNumber.message as string}
            />
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name on Card</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <TextInput
                style={styles.input}
                placeholder="Ty Lee"
                onChangeText={onChange}
                value={value}
              />
            )}
            name="name"
            rules={{ required: "Name on Card is required" }}
          />
          {formState.errors.name && (
            <ErrorMessage message={formState.errors.name.message as string} />
          )}
        </View>

        <View style={styles.flexContainer}>
          <View style={[styles.inputContainer, styles.halfWidth]}>
            <Text style={styles.label}>Expiry Date</Text>
            <Controller
              control={control}
              render={({ field: { value, onChange } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="MM/YY"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="expiryDate"
              rules={{
                required: "Expiry Date is required",
                pattern: {
                  value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                  message: "Expiry Date should be in MM/YY format",
                },
                validate: (value) => {
                  const currentDate = new Date();
                  const [month, year] = value.split("/");
                  const expiryDate = new Date(
                    Number(`20${year}`),
                    Number(month) - 1,
                    1
                  );
                  return (
                    expiryDate > currentDate ||
                    "Expiry Date should not be in the past"
                  );
                },
              }}
            />
            {formState.errors.expiryDate && (
              <ErrorMessage
                message={formState.errors.expiryDate.message as string}
              />
            )}
          </View>

          <View style={[styles.inputContainer, styles.halfWidth]}>
            <Text style={styles.label}>CVV</Text>
            <Controller
              control={control}
              render={({ field: { value, onChange } }) => (
                <TextInput
                  style={styles.input}
                  placeholder=""
                  keyboardType="numeric"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="cvv"
              rules={{
                required: "CVV is required",
                minLength: {
                  value: 3,
                  message: "CVV should be at least 3 characters long",
                },
                maxLength: {
                  value: 4,
                  message: "CVV should not exceed 4 characters",
                },
                pattern: {
                  value: /^\d+$/,
                  message: "CVV should only contain digits",
                },
              }}
            />
            {formState.errors.cvv && (
              <ErrorMessage message={formState.errors.cvv.message as string} />
            )}
          </View>
        </View>
      </View>
      {error && <ErrorText error={error} />}
      <Button title="Add Card" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfWidth: {
    width: "48%",
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
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
