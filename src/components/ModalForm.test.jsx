// NPM Packages
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

// Project files
import ModalForm from "./ModalForm";

// when the cancel button is pressed, the modal dissapear
test("When the cancel button is pressed, the modal dissapear", async () => {
  // Arrange
  const modalState = [true, () => {}];
  const listState = [[], () => {}];

  render(<ModalForm modalState={modalState} listState={listState} />);

  // Act
  const buttonElement = screen.getByText(/cancel/i);
  fireEvent.click(buttonElement);

  // Assert
  const titleElement = screen.queryByText(/Add new product/i);

  await waitFor(() => {
    expect(expect(titleElement).not.toBeInTheDocument());
  });
});

// when the user fills the correct information, the modal submit the form and dissapears
