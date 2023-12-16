import { render, fireEvent } from "@testing-library/react-native";
import colors from "../../../theme/color.json";
import Button from "../../../components/common/Button";

describe("Button Component", () => {
  test("renders button correctly", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Button title="Test Button" onPress={onPressMock} />
    );

    const button = getByTestId("button");
    expect(button).toBeTruthy();
    expect(button).toHaveStyle({ backgroundColor: colors.primary });

    // Simulate a button press
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });

  test("renders loading state correctly", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Button title="Test Button" isLoading onPress={onPressMock} />
    );

    const loadingSpinner = getByTestId("loading-spinner");
    expect(loadingSpinner).toBeTruthy();

    // Ensure that the button is disabled during loading
    const button = getByTestId("button");
    expect(button).toBeDisabled();
  });

  test("renders with custom styles correctly", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Button
        title="Test Button"
        onPress={onPressMock}
        backgroundColor="red"
        color="blue"
      />
    );

    const button = getByTestId("button");
    expect(button).toHaveStyle({ backgroundColor: "red" });

    const text = getByTestId("text");
    expect(text).toHaveStyle({ color: "blue" });
  });
});
