import React from "react";
import { render } from "@testing-library/react-native";
import LoadingSpinner from "../../../components/common/LoadingSpinner";

describe("LoadingSpinner Component", () => {
  test("renders loading spinner correctly", () => {
    const { getByTestId } = render(<LoadingSpinner />);

    // Assert that the loading spinner is present
    const loadingSpinner = getByTestId("loading-spinner");
    expect(loadingSpinner).toBeTruthy();
  });
});
