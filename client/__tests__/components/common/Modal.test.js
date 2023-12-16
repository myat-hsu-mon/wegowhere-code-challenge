import { render, fireEvent } from "@testing-library/react-native";
import Modal from "../../../components/common/Modal";

describe("Modal Component", () => {
  test("renders modal correctly", () => {
    const mockSetModalVisible = jest.fn();

    const { getByText } = render(
      <Modal
        title="Test Modal"
        modalVisible={true}
        setModalVisible={mockSetModalVisible}
      />
    );

    const modalTitle = getByText("Test Modal");
    expect(modalTitle).toBeTruthy();
  });

  test("calls setModalVisible when Done button is pressed", () => {
    const mockSetModalVisible = jest.fn();

    const { getByText } = render(
      <Modal
        title="Test Modal"
        modalVisible={true}
        setModalVisible={mockSetModalVisible}
      />
    );

    const doneButton = getByText("Done");
    fireEvent.press(doneButton);

    expect(mockSetModalVisible).toHaveBeenCalledWith(false);
  });
});
