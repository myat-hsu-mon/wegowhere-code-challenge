import { render } from "@testing-library/react-native";
import ErrorText from "../../../components/common/ErrorText";

describe("ErrorText Component", () => {
  test("renders error message correctly", () => {
    const errorMessage = "This is an error message";
    const { getByText } = render(<ErrorText error={errorMessage} />);

    const errorText = getByText(errorMessage);

    expect(errorText).toBeTruthy();
    expect(errorText).toHaveStyle({
      textAlign: "center",
      padding: 12,
      color: "red",
    });
  });
});
