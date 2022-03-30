// NPM package
import { render, screen, fireEvent } from "@testing-library/react";

// Project files
import ModalForm from "./ModalForm";

// Clicking on "Submit" create the item
test("Clicking on Submit create an item", () => {
  // Arrange (setup)
  const listState = [[], () => {}];
  const modalState = [true, () => {}];
  render(<ModalForm listState={listState} modalState={modalState} />);

  const buttonElement = screen.getByText(/submit/i);

  // Act (action)
  fireEvent(
    buttonElement,
    new MouseEvent("click", { bubbles: true, cancelable: true })
  );
});

// Clicking on "Cancel" cleans the form and closes it

// That you cannot send multiple empty spaces in the input field

// That the form clears itself after submiting and item
