import { render } from "@testing-library/react-native";
import ErrorMessage from "../../../components/common/ErrorMessage";

describe("ErrorMessage Component", () => {
  test("renders error message correctly", () => {
    const errorMessage = "This is an error message";
    const { getByText } = render(<ErrorMessage message={errorMessage} />);

    const errorText = getByText(errorMessage);
    expect(errorText).toBeTruthy();
    expect(errorText).toHaveStyle({ color: "red" });
  });
});
