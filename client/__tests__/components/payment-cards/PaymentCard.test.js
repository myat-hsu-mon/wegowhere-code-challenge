import React from "react";
import { render } from "@testing-library/react-native";
import PaymentCard from "../../../components/payment-cards/PaymentCard";

const mockCardData = {
  cardNumber: "1234567890123456",
  name: "John Doe",
  expiryDate: "12/23",
};

describe("PaymentCard Component", () => {
  test("renders PaymentCard correctly", () => {
    const { getByText } = render(<PaymentCard {...mockCardData} />);

    const cardType = getByText("VISA");
    const cardNumber = getByText("**** **** **** 3456");
    const nameOnCard = getByText("John Doe");
    const expires = getByText("12/23");

    expect(cardType).toBeTruthy();
    expect(cardNumber).toBeTruthy();
    expect(nameOnCard).toBeTruthy();
    expect(expires).toBeTruthy();
  });
});
