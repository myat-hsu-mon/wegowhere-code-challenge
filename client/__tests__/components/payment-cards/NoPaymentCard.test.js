import { render } from "@testing-library/react-native";
import NoPaymentCard from "../../../components/payment-cards/NoPaymentCard";

describe("NoPaymentCard Component", () => {
  test("renders NoPaymentCard correctly", () => {
    const { getByText, getByTestId } = render(<NoPaymentCard />);

    const message = getByText("No Cards Found");
    const recommendation = getByText(
      "We recommend adding a card for easy payment"
    );
    const addNewCardLink = getByText("Add New Card");

    expect(message).toBeTruthy();
    expect(recommendation).toBeTruthy();
    expect(addNewCardLink).toBeTruthy();
  });
});
